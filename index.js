var WORD=require("./word");
var inquirer=require("inquirer");
var fs=require("fs");
var guessedLetters;
var guessesRemaining;
var wordObject;
var wordToGuess;
var lettersLeft;


var listOfWords=fs.readFileSync("wordsforgame.txt").toString().split(",");
function startTheGame(){
    inquirer.prompt([
    {
        type:"list",
        name:"start",
        message:"Select your Option for HANGMAN",
        choices:["BEGINNER( Guesses - 12)","MEDIUM( Guesses - 8)","HARD LEVEL( Guesses - 4)","EXIT"]
    }
    ]).then(function(answer){
        switch(answer.start){
            case "BEGINNER( Guesses - 12)":
               startGame(12);
               break;
            case "MEDIUM( Guesses - 8)":
               startGame(8);
               break;
            case "HARD LEVEL( Guesses - 4)":
               startGame(4);
               break;
            case "EXIT": default:
        
        }
    });
}

function startGame(guesses){
    guessesRemaining=guesses;
    wordToGuess=listOfWords[Math.floor(Math.random()*listOfWords.length)];
    wordObject=new WORD(wordToGuess);
    lettersLeft=wordToGuess.split("");
    guessedLetters=[];
    displayWord(0);
    // console.log(wordToGuess);
    // console.log(lettersLeft);

}


function displayWord(){
    wordObject.showLettersWithBlanks();
    console.log("\n");
    inquirer.prompt([
        {
            name:"guess",
            message:"Guess a letter !. Type QUIT to Exit"
        }
    ]).then(function(answer){
        if(answer.guess === "QUIT" ||answer.guess === "quit" ){
            looseGame();
        }
        else if(guessedLetters.indexOf(answer.guess) > -1){
              displayWord(1);
        }
        else if(wordToGuess.indexOf(answer.guess) == -1){
              guessesRemaining--;
              console.log("\nGuesses Remaining = "+guessesRemaining);
            if(guessesRemaining > 0){
                guessedLetters.push(answer.guess);
                console.log("\nGuessed Letters = "+guessedLetters);
                displayWord(2);
            }
            else{
                looseGame();
            }
        }
        else{
            wordObject.newString(answer.guess);
            lettersLeft=lettersLeft.filter(function(char){ return char != answer.guess});
            if(lettersLeft.length > 0){
                guessedLetters.push(answer.guess);
                console.log("\nGuessed Letters = "+guessedLetters);
                displayWord(3);
            }
            else{
                 winGame();
            }
        }
    });
}
function winGame(){
    console.log("\nCongratulations! you guessed the word "+wordToGuess);
    stopGame();
}
function looseGame(){
    console.log("\nOops You loose!The word was "+wordToGuess);
    stopGame();
}
function stopGame(){
    console.log("\nWould you like to play again?\n");
    startTheGame();
}
startTheGame();