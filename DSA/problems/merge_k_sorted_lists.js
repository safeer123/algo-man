/*
========== PROBLEM ======
You are given an array of k linked-lists lists, 
each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

*/


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

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const mergeKLists = function (lists) {
    let head = null;
    let itr = null;
    while (lists.some(l => l)) {
        let min = undefined;
        let minIndex = 0;
        lists.forEach((l, i) => {
            if (l) {
                if (min === undefined || l.val < min) {
                    min = l.val;
                    minIndex = i;
                }
            }
        });
        const temp = lists[minIndex];
        lists[minIndex] = lists[minIndex].next;
        if (!head) {
            head = temp;
            itr = head;
        } else {
            itr.next = temp;
            itr = itr.next;
        }
    }
    return head;
};
