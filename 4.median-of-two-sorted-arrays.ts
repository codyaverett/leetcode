/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let totalValueCount = nums1.length + nums2.length;
    let emptyArray: number[] = new Array(totalValueCount);
    
    let mergedArray = nums1.concat(nums2).sort(function(a,b) { return a - b; }); //?

    // if even
    if( mergedArray.length % 2 === 0) {
        return ((mergedArray[mergedArray.length / 2] + mergedArray[(mergedArray.length / 2) - 1]) / 2)
    }

    // if odd
    return mergedArray[(mergedArray.length - 1) / 2];
};
// @lc code=end

findMedianSortedArrays([1,2,3,6,9], [2,4,5]); //?

findMedianSortedArrays([1,2,3,4,5,6,9], [2,5]); //? 

findMedianSortedArrays([1,2], [2,4]); //? 

findMedianSortedArrays([3], [-2,-1]); //? 