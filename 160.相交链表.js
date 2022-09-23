/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p = headA,
    p1 = headB,
    set = new WeakSet();
  while (p) {
    set.add(p);
    p = p.next;
  }
  while (p1) {
    if (set.has(p1)) {
      return p1;
    }
    p1 = p1.next;
  }
  return null;
};
// @lc code=end
