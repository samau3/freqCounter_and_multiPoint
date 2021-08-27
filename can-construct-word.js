"use strict";

// add whatever parameters you deem necessary & write doc comment

// create two frequency counter 
// check if all the letters passed exist in the word
// returns true or false 
// if letters string is empty return false


// word = abc
// letters = abcd

// wordCounter = {a:1, b:1, c:1}
// letterCounter = {a:1, b:1, c:1, d:1}

// lettersCounter[a] !== wordCounter[a] 
// if not true then just return false


/*
    * accepts two strings, first one is word and second one letters
    * returns true if the letters in the letters string can be used to create the word string
    * returns false if word cannot be made with the letters string
    * returns false if letters string is shorter length than words string
*/
function canConstructWord(word, letters) {
    if (letters.length === 0) return false;

    let wordCounter = {};
    let lettersCounter = {};

    // maybe use helper func
    for (let char of word) {
        wordCounter[char] = (wordCounter[char] || 0) + 1;
    }

    for (let char of letters) { // consider letter of letters
        lettersCounter[char] = (lettersCounter[char] || 0) + 1;
    }

    for (let key in wordCounter) {
        if (wordCounter[key] > lettersCounter[key]) return false;
    }

    return true;
}
