var groupAnagrams = function(strs) {
    const anagrams = new Map();
    let sortedStrs = strs.map((str) => {
        return str.split('').sort().join("");
    })

    for (let i = 0; i < sortedStrs.length; i++) {
        let key = sortedStrs[i];
        if (anagrams.has(key)) {
            anagrams.get(key).push(strs[i]);
        } else {
            anagrams.set(key, [strs[i]]);
        }
    }

    /* Initial approach -- 103ms */ 

    // const anagramArr = []

    // anagrams.forEach((value, key) => {
    //     anagramArr.push(value)
    // });

    // return anagramArr;

    /* Optimal approach */ 

    return Array.from(anagrams.values)
};

console.time();
groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.timeEnd();