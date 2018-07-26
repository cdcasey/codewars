function parensChecker(aString) {
    let isValid = 0;
    for (const parens of aString) {
        if (parens === '(') {
            isValid += 1;
        } else {
            isValid -= 1;
        }
        if (isValid < 0) {
            return false;
        }
    }
    return isValid === 0;
}

console.log(parensChecker('()'), true);
console.log(parensChecker('())'), false);
