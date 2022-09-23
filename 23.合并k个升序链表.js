/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let list = new ListNode(-1),
    p = list;
  lists = lists.filter(Boolean);
  while (lists.length) {
    lists = lists.sort((a, b) => b.val - a.val);
    let p1 = lists.pop();
    p.next = p1;
    if (p1 && p1.next) {
      lists.push(p1.next);
      lists = lists.sort((a, b) => b.val - a.val);
    }
    p = p.next;
  }
  return list.next;
};
// @lc code=end
