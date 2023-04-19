var searchInsert = function (nums, target) {
  start = 0;
  end = nums.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return start;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 18));
