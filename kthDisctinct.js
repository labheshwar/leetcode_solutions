// My initial solution - 78ms

// const kthDistinct = (arr, k) => {
//     const stringOccurences = {};
//     let num = 0;

//     for(let str of arr) {
//         if (stringOccurences[str]) {
//             stringOccurences[str]++;
//         } else {
//             stringOccurences[str] = 1;
//         }
//     }

//     for (let key in stringOccurences) {
//         if (stringOccurences[key] === 1) {
//             num++;
//             if (num === k) {
//                 return key
//             }
//         }
//     }
//     return ""
// };


// More optimal solution - 54ms

const kthDistinct = (arr, k) => {
    const stringOccurrences = new Map();

    for (let str of arr) {
        stringOccurrences.set(str, (stringOccurrences.get(str) || 0) + 1);
    }

    let num = 0;
    for (let str of arr) {
        if (stringOccurrences.get(str) === 1) {
            num++;
            if (num === k) {
                return str;
            }
        }
    }
}

