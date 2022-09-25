/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let isBalanced = true;

  const maxDepth = (root) => {
    if (!root) {
      return 0;
    }

    if (!isBalanced) {
      return -1;
    }

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    if (Math.abs(leftDepth - rightDepth) > 1) {
      isBalanced = false;
    }
    return Math.max(leftDepth, rightDepth) + 1;
  };

  maxDepth(root);
  return isBalanced;
};
// @lc code=end
