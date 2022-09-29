/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const getLefBorder = () => {
    // [left, right]
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      let mid = Math.ceil(left + (right - left) / 2);
      // if mid < left, then left = mid +1
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
        // the loop break logic is left > right, so if the mid is the left border
        // right = mid - 1 and left will be the correct one
      } else if (nums[mid] === target) {
        right = mid - 1;
      }
    }

    if (left >= nums.length) return -1;
    return nums[left] === target ? left : -1;
  };

  const getRightBorder = () => {
    // [left, right]
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      let mid = Math.ceil(left + (right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] === target) {
        left = mid + 1;
      }
    }

    if (left - 1 < 0) return -1;
    return nums[left - 1] === target ? left - 1 : -1;
  };

  return [getLefBorder(), getRightBorder()];
};
// @lc code=end
