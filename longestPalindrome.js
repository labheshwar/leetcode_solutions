var longestPalindrome = function (s) {
  var longest = '';
  var current = '';
  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length; j++) {
      current += s[j];
      if (isPalindrome(current) && current.length > longest.length) {
        longest = current;
      }
    }
    current = '';
  }
  return longest;
};

// optimized solution for isPalindrome

var isPalindrome = function (s) {
  var i = 0;
  var j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(longestPalindrome('babad')); // 'bab'
console.log(longestPalindrome('cbbd')); // 'bb'
