/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length;
  let dp_i10 = 0,
    dp_i11 = -Infinity,
    dp_i20 = 0,
    dp_i21 = -Infinity;

  for (let i = 0; i < len; i++) {
    dp_i20 = Math.max(dp_i20, dp_i21 + prices[i]);
    dp_i21 = Math.max(dp_i21, dp_i10 - prices[i]);
    dp_i10 = Math.max(dp_i10, dp_i11 + prices[i]);
    dp_i11 = Math.max(dp_i11, -prices[i]);
  }
  return dp_i20;
};
// @lc code=end
