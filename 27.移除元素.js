/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slow = 0,
    fast = 0,
    len = nums.length;
  while (fast < len) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }

  return slow;
};
// @lc code=end
