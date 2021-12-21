/*
=========== PROBLEM ===========

Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

*/

const threeSum1 = (nums) => {
    const lookup = {};
    for(let i = 0; i < nums.length; i += 1) {
        lookup[nums[i]] = lookup[nums[i]] || [];
        lookup[nums[i]].push(i);
    }

    const resultIndexArr = []
    for(let i = 0; i < nums.length; i += 1) {
        for(let j = i+1; j < nums.length; j += 1) {
            const pairSum = nums[i] + nums[j];
            // look for -pairSum in the lookup
            if(lookup[-pairSum]) {
                const found = lookup[-pairSum].find(k => (k !== i && k !== j));
                if(typeof found !== 'undefined') {
                    resultIndexArr.push([i, j, found]);
                }
            }
        }
    }

    const dupCheckHash = {};
    const result = resultIndexArr.filter(
        list => {
            list.sort();
            const key = list.join("|");
            if(dupCheckHash[key]) return false;
            return true;
        }
    ).map(
        list => {
            return list.map(i => nums[i]);
        }
    );
    return result;
}

var threeSum = function(nums) {
    
    const searchPartners = (list, sum, count) => {
        //console.log(list, sum, count)
        if(count === 0 && sum === 0) return [[]];
        if(count === 0 && sum !== 0) return [];
        if(list.length === 0) {
            return [];
        }

        const result = [];
        const dupCheck = {};
        for(let i = 0; i < list.length; i+=1) {
            const remList = list.slice(i + 1, list.length - i);
            // console.log(remList)
            if(!dupCheck[list[i]]) {
                const res = searchPartners(remList, sum-list[i], count - 1);
                const reslist = res.map(l => ([list[i], ...l]))
                const res2 = searchPartners(remList, sum, count);
                result.push(...reslist, ...res2);
            }

            dupCheck[list[i]] = true;
        } 
        // console.log('result----->')
        //console.log(result)
        return result;
    }
    
    return searchPartners(nums, 0, 3);
    
};

// console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum1([-1,0,1,2,-1,-4]));