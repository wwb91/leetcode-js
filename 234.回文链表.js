/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let p = head;
  const reverse = (head) => {
    if (!head) return true;
    let res = reverse(head.next);
    res = res && head.val === p.val;
    p = p.next;
    return res;
  };

  return reverse(head);
};
// @lc code=end
