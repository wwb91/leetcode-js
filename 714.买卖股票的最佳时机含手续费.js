/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let len = prices.length;
  dp = Array(len).fill([0, -prices[0]]);

  for (let i = 1; i < len; i++) {
    let sell = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    let buy = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i] = [sell, buy];
  }

  return dp[len - 1][0];
};
// @lc code=end
