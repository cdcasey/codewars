const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
}

// function dirReduc(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === opposites[arr[i+1]]) {
//             arr.splice(i, 2);
//             dirReduc(arr);
//         }
//     }
//     return arr;
// }

function dirReduc(arr) {
    return arr.reduce((newArr, direction) => {
        if (newArr[newArr.length - 1] === opposites[direction]) {
            newArr.pop();
        } else {
            newArr.push(direction);
        }
        return newArr;
    }, []);
}

const start = Date.now();
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"]);
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []);
console.log(Date.now() - start);