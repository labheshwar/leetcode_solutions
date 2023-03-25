var removeElement = function (nums, val) {
  let newArrLen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[newArrLen] = nums[i];
      newArrLen++;
    } else {
      continue;
    }
  }
  return newArrLen;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
