// Verzin een willekeurig nummer tussen 1 en 10
let randomNumber = GenerateRandomNumber();
console.log(randomNumber);

// Grab elements from the DOM
const userGuessInput = document.getElementById('userGuess');
const feedback = document.getElementById('feedback');

// Hoe kunnen we de guessButton en playAgainButton selecteren?
const guessButton = document.getElementById('guessButton');
const playAgainButton = document.getElementById('playAgainButton');

// Function to handle guesses
guessButton.onclick = () => {

    if (userGuessInput.value === '') {
        feedback.textContent = 'Please enter a number!';
        return;
    }

    // zet de input om naar een getal
    const userGuess = parseInt(userGuessInput.value);
    

    // vergelijk het getal met het random getal welke 3 dingen moeten we checken?
    // Hint: is het getal te hoog, te laag of gelijk?
        if (userGuess === randomNumber){
            //win
            feedback.textContent = 'you won yey for u'
            playAgainButton.style.display = 'inline';
            guessButton.style.display = 'none';
        }
        if (userGuess < randomNumber){
             // losee
            feedback.textContent = 'to lew studpeed'
        }
        if (userGuess > randomNumber){
            //lose!!!!!!!
            feedback.textContent = 'you are falirue'
        }
        if (userGuess < randomNumber && userGuess <= 0){
            //lose!!!!!!!
            feedback.textContent = 'you are made of flariure'
        }
        if (userGuess > randomNumber && userGuess > 10){
            //lose!!!!!!!
            feedback.textContent = 'you are made of stupid'
        }
        
    // dit toont de play again button en verbergt de guess button
        // guessButton.style.display = 'none';
        // playAgainButton.style.display = 'inline';
};

// Function to reset the game
playAgainButton.onclick = () => {
    randomNumber = GenerateRandomNumber();
    feedback.textContent = '';
    userGuessInput.value = '';
    guessButton.style.display = 'inline';
    playAgainButton.style.display = 'none';
};

// dit is een functie om een willekeurig getal te genereren
// tussen 1 en 10
function GenerateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
