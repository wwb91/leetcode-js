/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) return null;
  let a = head,
    b = head;
  for (let i = 0; i < k; i++) {
    if (!b) return head;
    b = b.next;
  }

  let p = reverse(a, b);

  a.next = reverseKGroup(b, k);
  return p;
};

const reverse = (a, b) => {
  let pre = null,
    cur = a,
    next = a;
  while (cur !== b) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
// @lc code=end
