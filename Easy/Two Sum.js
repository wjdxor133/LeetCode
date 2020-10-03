/* 문제
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

// 문제 풀이
var twoSum = function (nums, target) {
  const numsIdx = {};
  for (let i = 0; i < nums.length; i++) {
    let curDiff = target - nums[i];

    if (numsIdx[curDiff] !== undefined && numsIdx[curDiff] !== i) {
      return [i, numsIdx[curDiff]];
    } else {
      numsIdx[nums[i]] = i;
    }
  }
};

// 다른 문제 풀이
var twoSum = function (nums, target) {
  const numsIdx = {};
  for (let i = 0; i < nums.length; i++) {
    const curNumber = nums[i];
    const neededValue = target - curNumber; // 우리가 필요한 값
    const idx2 = numsIdx[neededValue]; // 이전 값을 확인하고 객체에 뭔가 있는지 확인

    if (idx2 !== undefined) {
      return [idx2, i];
    } else {
      // 해당 인덱스가 없을 경우, 그 숫자를 해시의 키로 저장하고
      // 그 해시값을 그 숫자가 발생한 인덱스가 될 것
      // 즉 해시 내부에서 배열을 복원하는 것!
      numsIdx[curNumber] = i;
    }
  }
};
