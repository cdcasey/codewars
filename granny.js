function tour(friends, fTowns, distTable) {
    const fTownsMap = new Map(fTowns);
    const distTableMap = new Map();
    for (let i = 0; i < distTable.length; i += 2) {
        const friend = distTable[i];
        const distance = distTable[i + 1];
        distTableMap.set(friend, distance);
    }
    return Math.floor(friends.filter(friend => fTownsMap.has(friend))
        .reduce((acc, friend, i, arr) => {
            let distWalked = 0;
            const currentDistance = distTableMap.get(fTownsMap.get(friend));
            if (i === 0) {
                distWalked = currentDistance;
            } else {
                const previousDistance = distTableMap.get(fTownsMap.get(arr[i - 1]));
                distWalked = Math.sqrt(Math.pow(currentDistance, 2) - Math.pow(previousDistance, 2));
            }
            if (i === arr.length - 1) {
                distWalked += currentDistance;
            }
            return acc + distWalked;
        }, 0));
}

const friends1 = ['A1', 'A2', 'A3', 'A4', 'A5'];
const fTowns1 = [['A1', 'X1'], ['A2', 'X2'], ['A3', 'X3'], ['A4', 'X4']];

const distTable1 = ['X1', 100.0, 'X2', 200.0, 'X3', 250.0, 'X4', 300.0];

console.log(tour(friends1, fTowns1, distTable1), 889);
