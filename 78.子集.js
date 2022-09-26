/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [],
    arr = [],
    len = nums.length;

  const backTrace = (index) => {
    result.push([...arr]);
    for (let i = index; i < len; i++) {
      arr.push(nums[i]);
      backTrace(i + 1);
      arr.pop();
    }
  };

  backTrace(0);
  return result;
};
// @lc code=end
