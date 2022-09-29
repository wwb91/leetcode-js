/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = {},
    window = {};
  for (let str of t) {
    map[str] = map[str] === undefined ? 1 : map[str] + 1;
    window[str] = 0;
  }
  let left = 0,
    right = 0,
    valid = 0,
    start = 0,
    len = Infinity;
  while (right < s.length) {
    let char = s[right];
    right++;
    if (map[char]) {
      window[char]++;
      if (map[char] === window[char]) {
        valid++;
      }
    }

    while (valid === Object.keys(map).length) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      let char = s[left];
      left++;
      if (map[char]) {
        if (window[char] === map[char]) {
          valid--;
        }
        window[char]--;
      }
    }
  }

  return len === Infinity ? "" : s.substring(start, start + len);
};
// @lc code=end
