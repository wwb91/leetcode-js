/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
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
    dp_i_start = 0,
    dp_i_end = 0;
  if (len === 1) return nums[0];
  for (let i = 0; i < len - 1; i++) {
    dp_i_start = Math.max(dp_i_1, dp_i_2 + nums[i]);
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i_start;
  }
  dp_i_1 = 0;
  dp_i_2 = 0;
  for (let i = 1; i < len; i++) {
    dp_i_end = Math.max(dp_i_1, dp_i_2 + nums[i]);
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i_end;
  }

  return Math.max(dp_i_start, dp_i_end);
};
// @lc code=end
