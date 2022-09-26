/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let result = [],
    arr = [],
    len = nums.length;
  nums = nums.sort();

  const backTrace = (index) => {
    result.push([...arr]);
    for (let i = index; i < len; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue;
      arr.push(nums[i]);
      backTrace(i + 1);
      arr.pop();
    }
  };

  backTrace(0);
  return result;
};
// @lc code=end
