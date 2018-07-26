function sentence(List) {
    List.sort((a, b) => {
        return Number(Object.keys(a)[0]) - Number(Object.keys(b)[0])
    });
    return List.reduce((acc, cur) => {
        return acc + `${Object.values(cur)[0]} `;
    }, '').trim();
}

let List = [
    { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
    { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
];

// Test.assertEquals(sentence(List), 'Vatsan took his dog for a spin');
console.log(sentence(List), 'Vatsan took his dog for a spin');