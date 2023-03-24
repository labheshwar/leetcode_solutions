var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else {
            let top = stack.pop();
            if (c === ')' && top !== '(') {
                return false;
            }
            if (c == ']' && top != '[') {
                return false;
            }
            if (c == '}' && top != '{') {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
