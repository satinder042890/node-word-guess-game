# node-word-guess-game

## Starting Screen
1. This is a hangman-style word game in Node-js, using two different constructors. 
2. The index.js runs the actual game with a dependency on the constructor, word.js.
3. word.js also has a dependency on the letter.js constructor. 
4. When the game is run in node, the user is prompted to select level(Beginner, Medium, Hard) for the game or to exit the game.
5. In the beginner level, the user has 12 guesses to guess the word.
6. In the medium level, the user has 8 guesses to guess the word.
7. In the hard level, the user has only 4 guesses to guess the word.

![Alt text](https://github.com/satinder042890/node-word-guess-game/blob/master/images/userscreen.png)

## Asking User to type a letter
8. After selecting the level, the game provides a word to guess.
9.The user has to enter a letter to try to guess the word, which starts with blanks. 
10. If the letter is in the word, the word/underscore representation is shown with the letter revealed. 
11. If the letter is not in the word, the user is looses his one guess and given another chance to guess, with a total of guesses possible according to the level of game.

![Alt text](https://github.com/satinder042890/node-word-guess-game/blob/master/images/typeletter.png)

## Win Message
12. If the user is able to guess the word without loosing all the guesses.
13. Win message shows to the screen, and ask the user to play again or quit the game.

![Alt text](https://github.com/satinder042890/node-word-guess-game/blob/master/images/win.png)

## Loose Message
14. if the user looses all his guesses, without guessing the word.
15. Loose message shows to the screen, and ask the user to play again or quit the game.

![Alt text](https://github.com/satinder042890/node-word-guess-game/blob/master/images/loose.png)

## Quit Option
16. The user simpley type quit anytime, if he wants to quit the game.

![Alt text](https://github.com/satinder042890/node-word-guess-game/blob/master/images/quit.png)


## Video Link
https://drive.google.com/file/d/1UIZB4h2F3nqtTtANfk5A-SA--AXwpY1r/view
