// function array_diff(a, b) {
//     // Check all values in a to make see if they exist in b
//     let intersection = a.filter((n) => b.includes(n));
//     console.log("i",intersection);
//     if (intersection.length === 0) {
//         return a;
//     }
//     let result = [];
//     for (let i in intersection) {
//         // check all values of a to make sure they aren't equal to the current
//         // value of intersection[i]
//         result.push(a.filter(e => e !== intersection[i]));
//     }
//     return result;
// }

function array_diff(a, b) {
    // Check all values in a to make see if they exist in b
    result = [];
    for (let i in a) {
        if (b.includes(a[i])) {
            continue;
        } else {
            result.push(a[i]);
        }
    }
    return result;
}

// Should be []
console.log(array_diff([], [4, 5]));

// Should be [4]
console.log(array_diff([3, 4], [3]));

//Should be [1, 8, 2]
console.log(array_diff([1, 8, 2], []));

// Should be [1, 3, 4]
console.log(array_diff([1, 2, 2, 3, 4, 5, 7], [2, 5, 6, 7, 7, 9]));

console.log(array_diff([1,2,2,2,3],[2]));
