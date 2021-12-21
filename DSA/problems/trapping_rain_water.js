//=========== Trapping rain water =================

/*
----> PROBLEM
Given n non-negative integers representing an elevation map 
where the width of each bar is 1, compute how much water it can trap after raining.
https://leetcode.com/problems/trapping-rain-water/
*/

// Solution is tricky here
// Find the leftMax[i] => the max number on the left of i
// Find the rightMax[i] => the max number on the right of i
// Both of these are found using DP, leftMax[i] = max(leftMax[i-1], height[i])
// Water trapped exactly at i => min(leftMax[i], rightMax[i]) - height[i]
const trap = (height) => {
    if(height.length > 0) {
        const leftMax = [];
        const rightMax = [];

        let leftMaxCurrent = 0;
        for(let i = 0; i < height.length; i+= 1) {
            leftMaxCurrent = Math.max(leftMaxCurrent, height[i]);
            leftMax[i] = leftMaxCurrent;
        }


        let rightMaxCurrent = 0;
        for(let i = height.length - 1; i >= 0; i-= 1) {
            rightMaxCurrent = Math.max(rightMaxCurrent, height[i]);
            rightMax[i] = rightMaxCurrent;
        }

        let trapAmount = 0;
        for(let i = 0; i < height.length; i+= 1) {
            trapAmount += (Math.min(leftMax[i], rightMax[i]) - height[i]);
        }
        return trapAmount;
    }
    return 0;
}

// Too tricky solution
// put indices of the array into a stack
// When we encounter an item greater than the top element referred in the stack
// Then we pop the elements and computes any trap water possible
const trap_using_stack = (height) => {
    const stack = [];

    let trapAmnt = 0;
    for(let i = 0; i < height.length; i += 1) {
        // console.log(stack);
        while(stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            const pop = stack.pop();
            if(stack[stack.length - 1]) {
                const distance = i - stack[stack.length - 1] - 1;
                if(distance > 0) {
                    const boundHeight = Math.min(height[i], height[stack[stack.length - 1]] - height[pop]);
                    // console.log(i, distance, boundHeight);
                    trapAmnt += (boundHeight * distance);
                }
            }
        }
        stack.push(i);
    }
    return trapAmnt;
}

//===== Examples

// console.log(trap([0,1,2,0,5,7,4,3,8,2]));
console.log(trap_using_stack([0,1,2,0,5,7,4,3,8,2]));
console.log(trap_using_stack([1,2,0,1]));