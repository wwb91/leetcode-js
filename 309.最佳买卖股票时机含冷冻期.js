/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length,
    // [0, -1]
    dp = Array(len).fill([0, -prices[0]]);
  for (let i = 1; i < len; i++) {
    let buy, sell;
    if (i === 1) {
      sell = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      buy = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    } else {
      sell = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      buy = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
    }
    dp[i] = [sell, buy];
  }
  return dp[len - 1][0];
};
// @lc code=end
