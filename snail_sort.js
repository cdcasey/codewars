snail = function (array) {
    // enjoy
    let sortedArray = [];
    const limit = array.length * array.length;
    let count = 0;
    let topEdge = 0;
    let rightEdge = array.length - 1;
    let bottomEdge = array.length - 1;
    let leftEdge = 0;

    while (count < limit) {
        for (let i = topEdge; i < array.length; i++) {

        }
        topEdge+=1
        count++;
    }
}

const array = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

const array2 = [[1, 2, 3, 4],
[12, 13, 14, 5]
[111, 16, 15, 6],
[10, 9, 8, 7]];

console.log(snail(array));
console.log(snail(array2));

// snail(array) #=> [1,2,3,6,9,8,7,4,5]