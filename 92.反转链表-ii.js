/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === 1) {
    return reversePart(head, right);
  }
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
};

let successPart = null;

const reversePart = (head, n) => {
  if (n === 1) {
    successPart = head.next;
    return head;
  }

  const last = reversePart(head.next, n - 1);
  head.next.next = head;
  head.next = successPart;
  return last;
};
// @lc code=end
