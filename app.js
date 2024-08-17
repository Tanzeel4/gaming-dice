const userPlayer = document.querySelector('#userPlayer');
const opponentPlayer = document.querySelector('#opponentPlayer');
const userCurrentScore = document.querySelector('#userCurrentScore');
const opponentCurrentScore = document.querySelector('#opponentCurrentScore');
const userTotalScore = document.querySelector('#userTotalScore');
const opponentTotalScore = document.querySelector('#opponentTotalScore');
const diceImage = document.querySelector('#diceImage');

let isUserActive = true;
let currentScore = 0;
function handleRollDice() {
    const diceValue = Math.ceil(Math.random() * 6);
    console.log(diceValue);
    diceImage.src = `./asset/${diceValue}.jpg`;
    currentScore += diceValue;
    if (isUserActive) {
        if (diceValue === 1) {
            isUserActive = false;
            userCurrentScore.innerHTML = 0;
            userPlayer.style.backgroundColor = "gray";
            opponentPlayer.style.backgroundColor = "lightgreen";
            currentScore = 0;
        } else {
            userCurrentScore.innerHTML = currentScore;
        }
    } else {
        if (diceValue === 1) {
            isUserActive = true;
            opponentCurrentScore.innerHTML = 0;
            opponentPlayer.style.backgroundColor = "purple";
            userPlayer.style.backgroundColor = "lightgreen";
            currentScore = 0;
        } else {
            opponentCurrentScore.innerHTML = currentScore;
        }
    }
}
function handleHold() {
    if (isUserActive) {
        userTotalScore.innerText = +userTotalScore.innerText + currentScore;
        userCurrentScore.innerHTML = 0;
        isUserActive = false;
        opponentPlayer.style.backgroundColor = "lightblue";
        userPlayer.style.backgroundColor = "lightgreen";
    } else {
        opponentTotalScore.innerText = +opponentTotalScore.innerText + currentScore;
        opponentCurrentScore.innerHTML = 0;
        isUserActive = true;
        userPlayer.style.backgroundColor = "lightblue";
        opponentPlayer.style.backgroundColor = "lightgreen";
    }
}