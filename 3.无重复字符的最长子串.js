/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    res = 0,
    window = {};
  while (right < s.length) {
    let str = s[right];
    right++;
    window[str] = window[str] ? window[str] + 1 : 1;
    while (window[str] > 1) {
      let w = s[left];
      left++;
      window[w]--;
    }
    res = Math.max(res, right - left);
  }
  return res;
};
// @lc code=end
