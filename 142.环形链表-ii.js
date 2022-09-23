/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let p = head,
    set = new WeakSet();
  while (p) {
    if (set.has(p)) {
      return p;
    }
    set.add(p);
    p = p.next;
  }
  return null;
};
// @lc code=end
