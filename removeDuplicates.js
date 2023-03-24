var removeDuplicates = function (nums) {
  var i = 0;
  var j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
