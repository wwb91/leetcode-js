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

  const backTrack = (index) => {
    if (sum === target) {
      result.push([...arr]);
      return;
    }
    if (sum > target) return;
    for (let i = index; i < candidates.length; i++) {
      arr.push(candidates[i]);
      sum += candidates[i];
      backTrack(i);
      sum -= candidates[i];
      arr.pop();
    }
  };

  backTrack(0);
  return result;
};
// @lc code=end
