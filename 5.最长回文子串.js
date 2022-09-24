/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";

  const getLongestPalindrome = (str, s, e) => {
    while (s >= 0 && e < str.length && str[s] === str[e]) {
      s--;
      e++;
    }
    return str.substring(s + 1, e);
  };

  for (let i = 0; i < s.length; i++) {
    let s1 = getLongestPalindrome(s, i, i);
    let s2 = getLongestPalindrome(s, i, i + 1);
    if (s1.length > res.length) {
      res = s1;
    }
    if (s2.length > res.length) {
      res = s2;
    }
  }

  return res;
};
// @lc code=end
