/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length,
    dp_i_1 = 0,
    dp_i_2 = 0,
    dp_i = 0;

  for (let i = 0; i < len; i++) {
    dp_i = Math.max(dp_i_1, dp_i_2 + nums[i]);
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i;
};
// @lc code=end
