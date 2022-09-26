/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
  let map = {};
  const change = (coins, amount) => {
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    if (map[amount] !== undefined) {
      return map[amount];
    }
    let res = Infinity;
    for (let coin of coins) {
      let sub = change(coins, amount - coin);
      if (sub === -1) continue;
      res = Math.min(res, sub + 1);
    }
    map[amount] = res === Infinity ? -1 : res;
    return map[amount];
  };

  return change(coins, amount);
};
// @lc code=end
