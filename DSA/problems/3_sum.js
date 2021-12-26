/*
=========== PROBLEM ===========

Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
https://leetcode.com/problems/3sum/
*/

const threeSum2 = function(nums) {
    if(nums.length > 2) {
        const res = [];
        nums.sort((a,b) => a-b);
        let prevVal;
        console.log(nums);
        for(let i = 0; i < nums.length; i += 1) {
            if(prevVal === nums[i]) continue;
            let j = i + 1;
            let k = nums.length - 1;
            while(k > j) {
                // console.log([nums[i] , nums[j] , nums[k]])
                const sum = nums[i] + nums[j] + nums[k];
                const currentVal_j = nums[j];
                const currentVal_k = nums[k];
                if(sum === 0) {
                    res.push([nums[i] , nums[j] , nums[k]]);
                    while(k > j && currentVal_j === nums[j]) {
                        j += 1;   
                    }
                    while(k > j && currentVal_k === nums[k]) {
                       k -= 1;  
                    }
                } else if (sum < 0) {
                    
                    while(k > j && currentVal_j === nums[j]) {
                        j += 1;   
                    }
                } else {
                     
                    while(k > j && currentVal_k === nums[k]) {
                       k -= 1;  
                    }
                }
            }
            prevVal = nums[i];
        }
        return res;
    }
    return [];
};

console.log(threeSum2([-1,0,1,2,-1,-4,-2,-3,3,0,4]));


/*

[12:29 pm] Harshith Thota
class Solution {
public:
vector<vector<int>> threeSum(vector<int>& nums) {
vector<vector<int>> res;
map<string, int> freq;
int index, index1, index2, sum, prevVal = INT_MIN;
sort(nums.begin(), nums.end());
for(index=0;index<nums.size();index++) {
index1 = index + 1;
index2 = nums.size() - 1;
if (prevVal == nums[index]) continue;
while(index1 < index2) {
sum = nums[index] + nums[index1] + nums[index2];
if (sum == 0) {
vector<int> arr;
arr.push_back(nums[index]);
arr.push_back(nums[index1]);
arr.push_back(nums[index2]);
string result = to_string(arr[0]) + to_string(arr[1]) + to_string(arr[2]);
auto it = freq.find(result);
if (it == freq.end()) {
res.push_back(arr);
freq.insert(pair<string, int>(result, 1));
}
index1++;
index2--;
}
else if (sum > 0) {
index2--;
} else {
index1++;
}
}
prevVal = nums[index];
}
return res;
}
};


*/