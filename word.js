var LETTER = require("./letter");
const Word = function(randomWord){
   this.WordToGuess=randomWord.split('').map(function(char){return new LETTER(char)});

   this.showLettersWithBlanks=function(){
      var string="";
      for(var i=0; i<this.WordToGuess.length; i++){
        string += this.WordToGuess[i].getCharacter() + " ";
      }
     console.log("\n"+string);
   };

   this.newString=function(guess){
      for(var i=0; i<this.WordToGuess.length; i++){
         this.WordToGuess[i].checkGuess(guess);
      }
   }
}

module.exports=Word;