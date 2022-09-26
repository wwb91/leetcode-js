/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [],
    used = {},
    sum = 0,
    arr = [];
  let len = Math.min(9, n);
  const backTrace = (k, s) => {
    if (s === len || sum >= n || arr.length === k) {
      if (sum === n && arr.length === k) {
        result.push([...arr]);
      }
      return;
    }

    for (let i = s; i <= len; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      sum += i;
      arr.push(i);
      backTrace(k, i);
      used[i] = false;
      sum -= i;
      arr.pop();
    }
  };

  backTrace(k, 1);
  return result;
};
// @lc code=end
