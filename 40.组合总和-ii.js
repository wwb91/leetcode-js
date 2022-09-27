/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [],
    used = new Set(),
    arr = [],
    sum = 0;
  candidates = candidates.sort();

  const backTrack = (index) => {
    if (sum === target && !used.has(arr.join(""))) {
      result.push([...arr]);
      used.add(arr.join(""));
      return;
    }
    if (sum > target) return;

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      arr.push(candidates[i]);
      sum += candidates[i];
      backTrack(i + 1);
      arr.pop();
      sum -= candidates[i];
    }
  };

  backTrack(0);
  return result;
};
// @lc code=end
