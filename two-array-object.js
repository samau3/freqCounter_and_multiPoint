'use strict';
// add whatever parameters you deem necessary

/*
    * Function accepts two arrays, one representing keys and second one representing values
    * Returns an object created from these two arrays
    * Extra values are not part of the created object, extra keys receive a value of null
*/

// 1. Create an empty object to store eventual keys and values
// 2. Loop through key array to create object
// key array will receive a value from value array at corresponding index
// 3. If object[key] is undefined due to not enough values, then change to null
// 4. Return object

function twoArrayObject(keyArray, valueArray) {
    let freqCount = {};

    for (let i = 0; i < keyArray.length; i++) {
        freqCount[keyArray[i]] = valueArray[i]; // make a variable e.g. currValue = freqCount...
        if (freqCount[keyArray[i]] === undefined) { // could use ternary
            freqCount[keyArray[i]] = null;
        }
    }
    return freqCount;
}
