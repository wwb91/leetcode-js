/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0,
    fast = 0,
    len = nums.length;
  while (fast < len) {
    if (nums[fast] !== 0) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  while (slow < len) {
    nums[slow++] = 0;
  }
};
// @lc code=end
