/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  let max = -Infinity;
  const maxOneSide = (root) => {
    if (!root) return 0;
    const left = Math.max(maxOneSide(root.left), 0);
    const right = Math.max(maxOneSide(root.right), 0);
    max = Math.max(max, right + left + root.val);
    return Math.max(left, right) + root.val;
  };

  maxOneSide(root);
  return max;
};
// @lc code=end
