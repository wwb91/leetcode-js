/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const increaseOne = (str, index) => {
    let arr = str.split("");
    if (arr[index] === "9") {
      arr[index] = "0";
    } else {
      arr[index]++;
    }
    return arr.join("");
  };

  const decreaseOne = (str, index) => {
    let arr = str.split("");
    if (arr[index] === "0") {
      arr[index] = "9";
    } else {
      arr[index]--;
    }
    return arr.join("");
  };

  let queue = ["0000"],
    visited = new Set(),
    step = 0;

  visited.add("0000");

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (deadends.includes(node)) continue;
      if (node === target) return step;

      for (let index = 0; index < 4; index++) {
        const increaseStr = increaseOne(node, index);
        if (!visited.has(increaseStr)) {
          queue.push(increaseStr);
          visited.add(increaseStr);
        }
        const decreasedStr = decreaseOne(node, index);
        if (!visited.has(decreasedStr)) {
          queue.push(decreasedStr);
          visited.add(decreasedStr);
        }
      }
    }
    step++;
  }

  return -1;
};
// @lc code=end
