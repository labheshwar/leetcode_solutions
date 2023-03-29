var canConstruct = function (s, k) {
    if (k > s.length) return false;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    let odd = 0;
    for (let [key, value] of map) {
        if (value % 2 === 1) odd++;
    }
    return odd <= k;
};

console.log(canConstruct("annabelle", 2));
console.log(canConstruct("leetcode", 3));
console.log(canConstruct("true", 4));
