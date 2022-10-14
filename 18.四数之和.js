/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  result = [];

  const threeSum = function (nums, index, target) {
    for (let i = index + 1; i < nums.length - 2; i++) {
      twoSum(nums, i, index, target - nums[i]);
      while (nums[i] === nums[i + 1]) i++;
    }
  };

  for (let i = 0; i < nums.length - 3; i++) {
    threeSum(nums, i, target - nums[i]);
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};

const twoSum = (nums, index, preIndex, target) => {
  let left = index + 1,
    right = nums.length - 1;
  while (left < right) {
    let low = nums[left],
      high = nums[right],
      sum = low + high;
    if (sum > target) {
      while (left < right && nums[right] === high) right--;
    } else if (sum < target) {
      while (left < right && nums[left] === low) left++;
    } else {
      result.push([nums[index], nums[left], nums[right], nums[preIndex]]);
      while (left < right && nums[right] === high) right--;
      while (left < right && nums[left] === low) left++;
    }
  }
};
// @lc code=end
