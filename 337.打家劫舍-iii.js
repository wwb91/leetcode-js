/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {
  const dp = (root) => {
    if (!root) {
      return [0, 0];
    }
    const left = dp(root.left);
    const right = dp(root.right);

    const rob = root.val + left[0] + right[0];
    const no_rob = Math.max(...left) + Math.max(...right);
    return [no_rob, rob];
  };

  const res = dp(root);
  return Math.max(...res);
};
// @lc code=end
