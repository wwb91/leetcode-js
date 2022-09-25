/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let maxDeepLen = 0;
  const maxDeep = (root) => {
    if (!root) return 0;
    const leftMax = maxDeep(root.left);
    const rightMax = maxDeep(root.right);
    maxDeepLen = Math.max(maxDeepLen, leftMax + rightMax);
    return Math.max(rightMax, leftMax) + 1;
  };

  maxDeep(root);
  return maxDeepLen;
};

// @lc code=end
