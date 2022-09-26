/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [],
    arr = [],
    sum = 0;

  const backTrace = (candidates, index) => {
    if (index === candidates.length || sum === target) {
      if (sum === target) {
        result.push([...arr]);
      }
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      arr.push(candidates[i]);
      sum += candidates[i];
      backTrace(candidates, i);
      sum -= candidates[i];
      arr.pop();
    }
  };

  backTrace(candidates, 0);
  return result;
};
// @lc code=end
