var myAtoi = function (s) {
    let num = parseInt(s);
    if (isNaN(num)) {
        return 0;
    }
    if (num > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    if (num < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    }
    return num;
};


console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));