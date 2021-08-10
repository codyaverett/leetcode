/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {

    for (let i = 0; i < nums.length; i++) {
        let searchNumber = target - nums[i]; //?

        let secondIndex = nums.findIndex((value, index) => {
            console.log(value) //?
            console.log(index) //?
            if (value === searchNumber && index != i) {
                return true;
            }
        })

        if(secondIndex != -1) {
            return [i, secondIndex]
        }
    }
};
// @lc code=end

// twoSum([2,7,11,15], 9); //? 
// twoSum([3,4,5,6,5,4,6,15,5], 9); //? 
// twoSum([3,3], 6); //? 
twoSum([3, 2, 4], 6) //?