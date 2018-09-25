/*

USER STORIES

* user should be prompted on how to start game and game should play when they do that

* user should be able to guess letters by pressing a key when prompted
    * should see whether guess is correct or incorrect or not a letter 
    * if incorrect, it should be added to previous guesses
    * if correct it should be show in the word

* user should be able to see previous guesses
* user should be able to see current state of word at all times
* user should be able to see rounds won/lost

* user should be told when they either win or lose

* user should be offered oppty to restart game

*/



/******************************************


create hangman

game should teach people about life being harsh and you can't take anything back it's all forever. bad decisions have consequences, deal with it.

player vs computer
player object
game object


word bank[]([]?)
random word generate
set word
    make this current word?
    track individual letters/word length
    make word an array?
    show blanks based on array


user needs to input letters
check/compare if letter is in word

keep track of bad guesses
keep track of good guesses


"guess"
    admonish them for 
        repeat guess
        non letter guess
    loop through array and check
    replace letters that match
    if no letters match
        bad guess
    else 
        good guess

what should happen on bad guess
    display bad guesses 
    7 bad guesses -- you lose
    some UX/UI message "Nope!"

what should happen on good guess
    letter should appear (UX?) in each place that it should appear
    display good guesses
    some UX/UI message "sweet!"    

it should tell user when they win

----------MVP above this line----------

hint

*******************************************/


// functions 
    // compareLetter
const game = {
    compareLetter() {

    }
}




// listeners
// listen to keys for keypress 
    
    // enter starts game ?
    
    // get letter
    // compare(letter)
    // store letter
    // 


