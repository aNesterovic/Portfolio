let amount = 100;
let monday = [
    ['Write a tutorial', 360],
    ['Some web development', 120]
];
let tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 60]
];

function changeHours(arr) {
    arr
        .forEach(function (el) {
            el[1] /= 60;
        })
}

changeHours(monday);
changeHours(tuesday);

let days = monday.concat(tuesday);

let modifyDays = days
    .filter(function (el) {
        if (el[1] <= 2) {
            return el;
        }
    })

modifyDays
    .forEach(function (el) {
        el.push(el[1] * amount)
    })


let newArr = modifyDays
    .map(function (el) {
        return `<tr><td>Task name: ${el[0]}</td><td>Taks duration: ${el[1]} hours</td><td>Task amount: $${el[2]}</td></tr>`
    })
    .join('')

document.write(`<table border = '1' rules='all'><tbody>${newArr}</tbody></table>`);