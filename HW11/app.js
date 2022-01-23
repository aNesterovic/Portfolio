let animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
];

let food = [
    ['🍎', 'apple', 10],
    ['🍐', 'pear', 12],
    ['🍊', 'tangerine', 15],
    ['🍋', 'lemon', 5],
    ['🍌', 'banana', 7]
];

let universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

const arrName = [animals, food, universes]
let result = ''
debugger;

function getInfo(arrName = checkArr(), tableName) {
    let TR = [];
    for (let i = 0; i < arrName.length; i++) {
        let TD = [];
        for (let j = 0; j < arrName[i].length; j++) {
            //Check if item is array
            if (!Array.isArray(arrName[i][j])) {
                TD.push(`<td>${arrName[i][j]}</td>`);
            } else {
                TD.push(`<td>${arrName[i][j].join('; ')}</td>`);
            }
        }
        TR.push(`<tr>${TD.join('')}</tr>`);
    }
    return document.write(`</br><table><caption>${tableName} info</caption > <tbody>${TR.join('')}</tbody></table > `);
}

//Check which array was selected
function checkArr(arrName) {
    if (!animals) {
        return animals;
    } else if (!food) {
        return food;
    } else if (!universes) {
        return universes;
    }
}

document.write(getInfo())
