let nmbr = Math.round(Math.random()*100+1)
// console.log(nmbr);

const submit = document.querySelector('#subt')
const userInput = document.querySelector("#guessField")

const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault() //ye hmlog isiliyn use krte taki value khin or n jayen and we can use this value for further 

        const guess = parseInt(userInput.value)
        // console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if((guess<1)){
        alert('Please enter a number more than 1')
    }
    else if((guess>100)){
        alert('Please enter a number less than 1')
    }
    else{
        prevGuess.push(guess) //array mai push
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${nmbr}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === nmbr){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < nmbr){
        displayMessage(`Number is TOO Low`)
    }
    else if(guess > nmbr){
        displayMessage(`Number is TOO High`)
    }
}

function displayGuess(guess){ 
    //basicallly we use this function so that we can clean our guess array
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    //
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    const ngb = document.querySelector('#newGame')
    ngb.addEventListener('click',function(e){
        nmbr = Math.round(Math.random()*100+1)
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess} `
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

