/* 

Cracking the Coding Interview

page 91

problem 1.6

*/

function stringCompress(aString) {
    let compressedString = '';
    let tempArray = []
    for (let i = 0; i < aString.length; i++) {
        const letter = aString[i];
        if (i === 0) {
            tempArray.push(letter);
            continue;
        }
        if (tempArray.includes(letter)) {
            tempArray.push(letter);
        } else {
            tempArray = [];
        }
        console.log(tempArray);

    }
    return compressedString;
}

console.log(stringCompress('aabcccccaaa'), 'a2b1c5a3');
