/*
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

#Task: Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.

#Example: dbl_linear(10) should return 22

#Note: Focus attention on efficiency
*/


// This works, but is not efficient enough
/*
function dblLinear(n) {
    // your code
    let array = [1];
    let i = 0;
    while (array.length < n*1.3) {
        const y = 2 * array[i] + 1;
        const z = 3 * array[i] + 1;
        if (!array.includes(y)) {
            array.push(y);
        }
        if (!array.includes(z)) {
            array.push(z);
        }
        i++;
        array.sort((a, b) => { return a - b });
    }
    // console.log(array);
    return array[n];
}
*/

// fails two basic upper-bounds tests plus random tests
/*
function dblLinear(n) {
    // store results
    let nObj = {}
    let nArray = [];
    let xQueue = [1];

    while (Object.keys(nObj).length < n) {
        let xTemp = xQueue.slice();
        // xQueue = [];
        // calculate y & z
        for (const x of xTemp) {
            const y = 2 * x + 1;
            const z = 3 * x + 1;

            xQueue.push(y, z);
            xQueue.shift();
            nObj[x] = { y: y, z: z }
        }
    }
    for (const x in nObj) {
        if (nObj.hasOwnProperty(x)) {
            const element = nObj[x];
            nArray.push(Number(x), element.y, element.z);
        }
    }
    // create set from stored results
    nArray = [...new Set(nArray)];
    // sort stored results
    nArray.sort((a, b) => { return a - b });
    // return nth item
    return nArray[n];
}
*/

function dblLinear(n) {
    nObj = { xval: 1, yval: { xval: 3 }, zval: { xval: 4 } };

}

// function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }

// Test.describe("dblLinear", function () {
//     Test.it("Basic tests", function () {
console.log(dblLinear(10), 22);
console.log(dblLinear(20), 57);
console.log(dblLinear(30), 91);
console.log(dblLinear(50), 175);
console.log(dblLinear(100), 447);
//     })
// })