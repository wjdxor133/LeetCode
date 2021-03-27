// code
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count += 1;
      }
    }
    if (count === 1) {
      sum += nums[i];
    }
  }
  return sum;
};
