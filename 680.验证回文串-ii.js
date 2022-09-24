/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  const isPalindrome = (s, l, r) => {
    while (l < r) {
      if (s[l++] !== s[r--]) {
        return false;
      }
    }
    return true;
  };

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }

    left++;
    right--;
  }

  return true;
};
// @lc code=end
