function digital_root(n) {
    // ...
    let sum = n;
    while (sum - 10 > -1) {
        let digits = sum.toString().split('');
        sum = digits.reduce((acc, cur) => {
            return acc + Number(cur);
        }, 0);
    }
    return sum;
}

console.log(digital_root(16), 7);
console.log(digital_root(12345), 6);