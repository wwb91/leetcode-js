/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  result = [];

  const twoSum = (nums, index, target) => {
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
        result.push([nums[index], nums[left], nums[right]]);
        while (left < right && nums[right] === high) right--;
        while (left < right && nums[left] === low) left++;
      }
    }
  };

  for (let i = 0; i < nums.length - 2; i++) {
    twoSum(nums, i, -nums[i]);
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};
// @lc code=end
