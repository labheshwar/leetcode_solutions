var letterCombinations = function(digits) {
    let letters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    if (digits === '') {
        return [];
    }

    let result = letters[digits[0]];
    for (let i = 1; i < digits.length; i++) {
        let temp = [];
        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < letters[digits[i]].length; k++) {
                temp.push(result[j] + letters[digits[i]][k]);
            }
        }
        result = temp;
    }
    return result;
};

console.log(letterCombinations('23'));
console.log(letterCombinations('234'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));