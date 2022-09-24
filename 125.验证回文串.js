/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (/[^a-zA-Z0-9]/.test(s[left])) {
      left++;
      continue;
    }
    if (/[^a-zA-Z0-9]/.test(s[right])) {
      right--;
      continue;
    }

    if (s[left++].toLowerCase() !== s[right--].toLowerCase()) {
      console.log("left: " + s[left], "right:" + s[right]);
      return false;
    }
  }

  return true;
};
// @lc code=end
