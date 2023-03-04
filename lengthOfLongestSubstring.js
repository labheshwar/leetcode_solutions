var lengthOfLongestSubstring = function (s) {
    let longestSubstring = 0;
    let current = '';
    for (let i=0;i<s.length;i++) {
        if (current.indexOf(s[i]) === -1) {
            current += s[i];
            if (current.length > longestSubstring) {
                longestSubstring = current.length;
            }
        } else {
            current = current.slice(current.indexOf(s[i]) + 1) + s[i];
        }
    }
    return longestSubstring;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('au'));
