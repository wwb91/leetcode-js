/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let minDiff = Infinity;
  let pre = null;
  const min = (root) => {
    if (!root) return;

    min(root.left);
    if (pre) {
      const diff = Math.abs(root.val - pre.val);
      minDiff = Math.min(minDiff, diff);
    }
    pre = root;
    min(root.right);
  };
  min(root);
  return minDiff;
};
// @lc code=end
