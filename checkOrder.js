const checkOrder = (word) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let wronglyPlacedAlphabet = 0;

    for (let i=0;i<word.length;i++) {
        if (alphabet[i] !== word[i]) {
            wronglyPlacedAlphabet++;
        }
    }
    return wronglyPlacedAlphabet;
}

console.log(checkOrder('dbc'));
console.log(checkOrder('abcdrffhk'));
