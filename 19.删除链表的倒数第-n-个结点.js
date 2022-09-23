/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p = new ListNode(-1);
  p.next = head;
  let p1 = p,
    p2 = p;

  for (let i = 0; i < n + 1; i++) {
    p1 = p1.next;
  }
  while (p1) {
    p2 = p2.next;
    p1 = p1.next;
  }

  p2.next = p2.next.next;
  return p.next;
};
// @lc code=end
