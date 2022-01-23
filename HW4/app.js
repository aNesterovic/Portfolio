//Value's stage
points = 0;
questionFirst = prompt('Сколько будет 2+2?');
questionFirst = questionFirst ? questionFirst.replaceAll(' ', '').toLowerCase() : '';
questionSecond = confirm('Солнце встает на востоке?');
questionThird = prompt('Сколько будет 5/0?');
questionThird = questionThird ? questionThird.replaceAll(' ', '').toLowerCase() : '';
questionFourth = prompt('Какого цвета небо?');
questionFourth = questionFourth ? questionFourth.replaceAll(' ', '').toLowerCase() : '';
questionGalaxy = +prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.');

//Looking through different answers and give 10 point if answer is correct
switch (questionFirst) {
    case '4':
    case 'чотири':
    case 'четыре':
    case 'four':
        points += 10;
        break;
};

if (questionSecond) {
    points += 10;
};

switch (questionThird) {
    case 'infinity':
    case 'нескінченність':
    case 'бесконечность':
        points += 10;
};

switch (questionFourth) {
    case 'блакитне':
    case 'голубое':
    case 'blue':
        points += 10;
        break;
};

if (questionGalaxy === 42) {
    points += 10;
};

//Inform user total sum of points
alert(`You got ${points} points!`);



