Array.prototype.renderList = function () {
    let documetArr = [];

    this
        .forEach(function (el) {
            typeof el === 'object' ? returnObj(el, documetArr) : documetArr.push(`<li>${el}</li>`)
        })
    return document.write(`<ul style = 'list-style: none'>${documetArr.join('')}</ul>`)
}

function returnObj(obj, arr) {
    let objectArr = [];
    for (let key in obj) {
        let objName = key[0].toUpperCase() + key.slice(1);
        objectArr.push(`${objName}: ${obj[key]}.`)
    }
    arr.push(`<li>${objectArr.join(' ')}</li>`)
}



const animals = [
    {
        name: 'dog',
        icon: '🐶'
    },
    {
        name: 'cat',
        icon: '🐱'
    },
    {
        name: 'hamster',
        icon: '🐹'
    },
    {
        name: 'rabbit',
        icon: '🐰'
    }
];

const flowers = ['🪴', '🌷', '🌾', '🌺'];
