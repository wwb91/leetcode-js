/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [],
    track = [],
    used = {};

  const traverse = (nums, track, used) => {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }
    for (const num of nums) {
      if (used[num]) {
        continue;
      }
      used[num] = true;
      track.push(num);
      traverse(nums, track, used);
      track.pop();
      used[num] = false;
    }
  };

  traverse(nums, track, used);
  return res;
};
// @lc code=end
