/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = [],
    map = {},
    arr = [];
  backup = new Set();
  for (const num of nums) map[num] = map[num] === undefined ? 1 : map[num] + 1;

  const backTrace = (nums) => {
    if (arr.length === nums.length) {
      if (!backup.has(arr.join(""))) result.push([...arr]);
      backup.add(arr.join(""));
      return;
    }

    for (const num of nums) {
      if (map[num] < 1) {
        continue;
      }

      map[num]--;
      arr.push(num);
      backTrace(nums);
      map[num]++;
      arr.pop();
    }
  };

  backTrace(nums);
  return result;
};
// @lc code=end
