var users = [
    ["john", "red", 5, ["ball", "book", "pen"]],
    ["becky", "blue", 10, ["tape", "backpack", "pen"]],
    ["susy", "red", 55, ["ball", "eraser", "pen"]],
    ["tyson", "green", 1, ["book", "pen"]],
];

// debugger;
let newUsers = [];
let userQuest = [];
users
    .forEach(function (arr) {
        let modify = arr.slice();
        modify.splice(0, 1, modify[0] + '!')
        newUsers.push(modify)
    });

users
    .forEach(function (arr) {
        userQuest.push(arr
            .map(function (item, index) {
                return index === 0 ? item + '?' : item;
            }))
    });

let filteredArr = users
    .filter(function (el) {
        return el[1] === 'red' && el;
    });


let sumOfScores = filteredArr
    .reduce(function (total, item, index) {
        let score = item[2];
        index === 0 ? total = score : total += score;
        return total;
    }, 0);

document.write(`
<table border = '1'>
    <tfoot style="background: #ffc">
        <tr><td>${sumOfScores}</td></tr>
    </tfoot>
    <tbody>
    </tbody>
</table>
`)