/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {

    /* Initial Approach */

    // const sortedWords = words.map(word => {
    //     return word.split("").sort().join("")
    // })

    // const similarWords = new Map();

    // for (let i=0;i<sortedWords.length;i++) {
    //     let key = sortedWords[i];
        
    //     if (similarWords.has(key)) {
    //         similarWords.set(key, similarWords.get(key) + 1);
    //     } else {
    //         similarWords.set(key, 1)
    //     }
    // }

    // let maxPairs = 0;

    // similarWords.forEach((value) => {
    //     if (value === 2) {
    //         maxPairs++;
    //     }
    // })

    /* Optimized version */

    const similarWords = new Map();

    for (let word of words) {
        let key = word.split("").sort().join("");
        similarWords.set(key, (similarWords.get(key) || 0) + 1);
    }

    let maxPairs = 0;

    for (let value of similarWords.values()) {
        if (value >= 2) {
            maxPairs += Math.floor(value / 2);
        }
    }

    return maxPairs;
}