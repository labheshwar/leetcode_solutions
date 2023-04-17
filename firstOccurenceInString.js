var strStr = function (haystack, needle) {
  const firstIndexOfNeedle = needle[0];

  if (haystack.indexOf(firstIndexOfNeedle) === -1) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === firstIndexOfNeedle) {
      let word = haystack.slice(i, i + needle.length);
      if (word === needle) {
        return i;
      }
    }
  }

  return -1;
};

console.log(strStr('sadbutsad', 'but'));
console.log(strStr('leetcode', 'leeto'));
console.log(strStr('leetcode', 'code'));
console.log(strStr('leetcode', ''));
console.log(strStr('mississippi', 'issip'));
