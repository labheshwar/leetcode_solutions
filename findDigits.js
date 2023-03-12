const findDigits = (n) => {
  let divisibleCounter = 0;
  let originalN = n;
  while (n !== 0) {
    let digit = parseInt(n % 10);
    
    if (digit !== 0 && originalN % digit === 0) {
      divisibleCounter++;
    }

    n = parseInt(n / 10);
  }

  return divisibleCounter;
};

console.log(findDigits(114108089));