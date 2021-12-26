//=============== PROBLEM =================
/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
https://leetcode.com/problems/merge-two-sorted-lists/
*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let header = null;
    let ptr1 = list1;
    let ptr2 = list2;
    let mergedPtr = null
    while (ptr1 || ptr2) {

        // check if we consider node from list1 as the candidate by comparison
        if ((ptr1 && ptr2 && ptr1.val < ptr2.val) || (ptr1 && !ptr2)) {
            if (!header) {
                header = ptr1;
                mergedPtr = ptr1;
            } else {
                mergedPtr.next = ptr1;
                mergedPtr = ptr1;
            }

            ptr1 = ptr1.next;
        }
        // check if we consider node from list2 as the candidate by comparison
        if ((ptr1 && ptr2 && ptr2.val <= ptr1.val) || (ptr2 && !ptr1)) {
            if (!header) {
                header = ptr2;
                mergedPtr = ptr2;
            } else {
                mergedPtr.next = ptr2;
                mergedPtr = ptr2;
            }
            ptr2 = ptr2.next;
        }
    }
    return header;

};