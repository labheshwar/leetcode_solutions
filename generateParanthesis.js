var generateParenthesis = function (n) {
    let result = [];
    let generate = function (left, right, str) {
        if (left === 0 && right === 0) {
            result.push(str);
            return;
        }
        if (left > 0) {
            generate(left - 1, right, str + '(');
        }
        if (right > 0 && left < right) {
            generate(left, right - 1, str + ')');
        }
    };
    generate(n, n, '');
    return result;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));