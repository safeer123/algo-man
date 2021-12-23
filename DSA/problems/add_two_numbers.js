/*
======== PROBLEM ===========
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.
https://leetcode.com/problems/add-two-numbers/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function(l1, l2) {
    let itr1 = l1;
    let itr2 = l2;
    let result = null;
    let itr = null;
    let carry_over = 0;
    const sumDigits = (...digits) => {
        let sum = 0
        for(let d of digits) {
            sum += d;
        }
        if(sum >= 10) {
            return [sum-10, 1];
        }
        return [sum, 0];
    }
    
    const push_to_result = (dig) => {
        const node = new ListNode(dig);
        if(!result) {
            result = node;
            itr = node;
        } else {
            itr.next = node;
            itr = node; 
        }
    }

    while(itr1 || itr2 || carry_over > 0) {
            const digsToAdd = [];
            if(itr1) {
                digsToAdd.push(itr1.val);
                itr1 = itr1.next;
            }
            if(itr2) {
                digsToAdd.push(itr2.val);
                itr2 = itr2.next;
            }
            if(carry_over > 0) {
                digsToAdd.push(carry_over);
            }
            const [dig, c] = sumDigits(...digsToAdd) ;
            console.log(dig, c);
            push_to_result(dig);
            carry_over = c;
    }
        
    return result;
};