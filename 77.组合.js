/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [],
    arr = [];
  const backTrace = (index) => {
    if (index === n + 1 || arr.length === k) {
      if (arr.length === k) {
        result.push([...arr]);
      }
      return;
    }

    for (let i = index; i <= n; i++) {
      arr.push(i);
      backTrace(i + 1);
      arr.pop();
    }
  };

  backTrace(1);
  return result;
};
// @lc code=end
