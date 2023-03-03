var twoSum = function(nums, target) {
    let newArray = [];
    for (let i=0;i<nums.length-1;i++) {
        for (let j=1;j<nums.length;j++) {
            if (((nums[i] + nums[j]) === target) && i !== j) {
                newArray[0] = i;
                newArray[1] = j;
                return newArray;
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));