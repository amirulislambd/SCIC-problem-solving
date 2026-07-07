// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const myset = new Set(nums)
    return myset.size !== nums.length
};

console.log(containsDuplicate([1,2,3,]))