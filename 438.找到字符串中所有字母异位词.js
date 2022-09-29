/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let need = {},
    window = {},
    result = [],
    left = 0,
    right = 0,
    valid = 0;
  for (let str of p) {
    need[str] = need[str] === undefined ? 1 : need[str] + 1;
    window[str] = 0;
  }

  while (right < s.length) {
    const c = s[right];
    right++;
    if (need[c]) {
      window[c]++;
      if (need[c] === window[c]) {
        valid++;
      }
    }

    while (valid === Object.keys(need).length) {
      let c = s[left];
      if (right - left === p.length) result.push(left);

      if (need[c]) {
        if (need[c] === window[c]) {
          valid--;
        }
        window[c]--;
      }
      left++;
    }
  }
  return result;
};
// @lc code=end
