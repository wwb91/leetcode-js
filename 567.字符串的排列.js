/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let need = {},
    window = {},
    left = 0,
    right = 0,
    valid = 0;
  for (let s of s1) {
    need[s] = need[s] === undefined ? 1 : need[s] + 1;
    window[s] = 0;
  }

  while (right < s2.length) {
    const s = s2[right];
    right++;
    if (need[s]) {
      window[s]++;
      if (need[s] === window[s]) {
        valid++;
      }
    }

    while (right - left >= s1.length) {
      if (valid === Object.keys(need).length) return true;
      const s = s2[left];
      left++;
      if (need[s]) {
        if (need[s] === window[s]) {
          valid--;
        }
        window[s]--;
      }
    }
  }

  return false;
};
// @lc code=end
