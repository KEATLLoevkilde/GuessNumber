//Inputs
const inpGuess = document.querySelector(".guess");

//Buttons
const buttonAgain = document.querySelector(".again");
buttonAgain.addEventListener('click', resetGame)

const buttonCheck = document.querySelector('.check')
buttonCheck.addEventListener('click', checkGuess)

//Labels
const labelNumber = document.querySelector(".number");
const labelScore = document.querySelector(".score");
const labelHighScore = document.querySelector('.highscore')
const labelMessage = document.querySelector(".message");

//Variables
let number = 0
let score = 20
let highscore = 0

//Functions
function resetGame(){
    number = Math.floor(Math.random() * 20 + 1)
    score = 20
    inpGuess.value = ""
    labelNumber.textContent = '?'
    labelScore.textContent = score
    labelHighScore.textContent = highscore
    labelMessage.textContent = 'Start guessing...'
    console.log('number: ' + number)
}

function checkGuess(){
    score = score - 1
    labelScore.textContent = score
    if(score <= 0){
        labelMessage.textContent = "GAME OVER! Press 'Again' for new game"
        labelScore.textContent = 0
    }else if(parseInt(inpGuess.value) === number){
        handleWin()
    }else{
        labelMessage.textContent = 'Guess again'
    }
}

function handleWin(){
    if(newHighscore()){
        labelNumber.textContent = number
        labelMessage.textContent = "You Won! New highscore!!! \nPress 'Again' for new game."
    }else{
        labelNumber.textContent = number
        labelMessage.textContent = "You Won!\nPress 'Again' for new game."
    }
}

function newHighscore(){
    if(score > highscore){
        highscore = score
        return true
    }else {
        return false;
    }
}

resetGame()