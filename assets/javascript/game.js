var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
     lettersGuessed = [];
     guessesLeft = 10;
     wins = 0;

//use Math.random 
var computerGuess = computerChoices[Math.round(Math.random() * computerChoices.length)];

console.log(computerGuess);
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode));

    addLetter(keyPress);
}

// repeat letters 
function addLetter (usersKeypress) {


    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

    //alert player if true.
    if (repeatGuess) {
        alert(usersKeypress + " Already Pressed!");

    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);

        //show user's input in browser
        showLettersGuessed();
        //is user's input a match to computer guess
        guessMatch(usersKeypress);
    }

}

//show letters guessed in browser
function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("You win!");
        wins = wins + 1;
        showWins();

    } else if (guessesLeft === 0) {
        alert("start over.");
        resetVariables ();

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}

// show wins
function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}

//show loses
function showWins() {
    document.getElementById("numLoses").innerHTML = loses;
}

//show guesses remaining
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}

function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 10;
}