//=============== PROBLEM =================
/*
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values 
in the list's nodes (i.e., only nodes themselves may be changed.)
https://leetcode.com/problems/swap-nodes-in-pairs/
*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// solution
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let ptr = head;
    let ptrPrev = null;
    let ptrHead = null;
    while (ptr) {
        console.log(ptr?.val)
        if (ptr.next) {
            if (!ptrHead) {
                ptrHead = ptr.next;
            }
            if (ptrPrev) {
                ptrPrev.next = ptr.next;
            }
            let temp = ptr.next.next;
            ptr.next.next = ptr;
            ptr.next = temp;
            ptrPrev = ptr;
            ptr = temp;
        } else {
            ptr = ptr.next;
        }
    }

    ptrHead = ptrHead || head;
    return ptrHead;
};
