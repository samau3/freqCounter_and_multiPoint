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

//Since both are of same value can loop through one number.
//While looping check if each number matches

const helper = (num) => {
  return num.toString().split("").sort();
};

function sameFrequency(num1, num2) {
  let str1 = helper(num1);
  let str2 = helper(num2);

  if (str1.length !== str2.length) return false;

  const freqCount = {};

  for (const num of str1) {
    freqCount[num] = (freqCount[num] || 0) + 1;
  }

  for (const num of str2) {
    if (freqCount[num]) {
      freqCount[num]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(3529578, 5879385));
