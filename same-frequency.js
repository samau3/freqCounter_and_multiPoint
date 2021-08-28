// add whatever parameters you deem necessary

/**
 * Function accept two parameters, both are numbers
 * Return true if each digit individually matches
 * Return false if not
 *
 * Constraint of O(m + n);
 */

//1. Setup guard claus, if number lengths don't add up return false;
//2. Need to loop through each number individually.
//Need to set to string to loop, if not using freqCounter need to sort numbers a different
//3. Set up a helper function,
//3.a return a string, set to an array and sort to easily compare

//4. Since both are of same value can loop through one number.
//4.a set a pointer for num1 to compare in num2 loop.
//While looping check if each number matches, if they match add to pointer at num1,
//If i is equal to num1.length - 1; return true
//else return false;

const helper = (num) => {
  return num.toString().split("").sort();
};

function sameFrequency(num1, num2) {
  let str1 = helper(num1);
  let str2 = helper(num2);

  if (str1.length !== str2.length) return false;

  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    if (i === str1.length - 1) {
      return true;
    }
    if (str1[i] === str2[j]) {
      i++;
    }
  }

  return false;
}

sameFrequency(128, 812);
