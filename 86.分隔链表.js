/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let big = new ListNode();
  let small = new ListNode();
  let l1 = big,
    l2 = small;
  while (head) {
    if (head.val < x) {
      l2.next = new ListNode(head.val);
      l2 = l2.next;
    } else {
      l1.next = new ListNode(head.val);
      l1 = l1.next;
    }
    head = head.next;
  }

  l2.next = big.next;
  return small.next;
};
// @lc code=end
