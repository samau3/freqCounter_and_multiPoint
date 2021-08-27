"use strict";
// add whatever parameters you deem necessary

/** Function accepts array and number, returns true if number matches average of an array pair, returns false if not
 *
 */

//TODO: // remove 
//1. Need to check pair in array. (2 values);
//Set two pointer variables one at beginning, one at end
//Check pointer values with loop.
//2. Using a loop
//Set a new variable based average pair of both current points
//If average equals NUMBER return true
//If average is less then add to pointer beginning
//Else substract at pointer end
//3. When out of loop return false;

function averagePair(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = arr[left] + arr[right] / 2;
    if (average === num) {
      return true;
    } else if (average < num) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
