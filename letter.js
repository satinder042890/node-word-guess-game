var Letter = function(wordLetter){
    this.wordLetter=wordLetter;
    this.alreadyGuessed=false;
    this.getCharacter=function(){
        if(this.alreadyGuessed){
            return this.wordLetter;
        }
        else{
            return "_";
        }
    };
    this.checkGuess=function(userGuess){
        if(userGuess === this.wordLetter){
            this.alreadyGuessed=true;
            return true;
        }
        else{
            return false;
        }
    };
};

// const l1=new Letter("a");
// l1.guessedLetter("b");
// console.log(l1.checkLetter());


module.exports=Letter;