function incrementString(strng) {
    // return incrementedString
    const letters = /[A-Za-z]+/.exec(strng);
    const numbers = /\d+/.exec(strng);
    if (numbers === null) {
        return `${letters ? letters[0] : ''}1`;
    }
    const numberLength = numbers[0].length;
    const newNumber = Number(numbers[0]) + 1;
    const numZeroes = newNumber.toString().length - 

    return newNumber;
}

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");