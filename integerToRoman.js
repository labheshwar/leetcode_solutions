var intToRoman = function (num) {
  let roman = '';
  let romanNumList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNumListKeys = Object.keys(romanNumList);
  let romanNumListValues = Object.values(romanNumList);
  let i = 0;
  while (num > 0) {
    if (num >= romanNumListValues[i]) {
      roman += romanNumListKeys[i];
      num -= romanNumListValues[i];
    } else {
      i++;
    }
  }
  return roman;
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));