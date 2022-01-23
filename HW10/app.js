sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

//Slice winter and summer sports into new arrays
summer_sports = sports.slice(5, 7);
summer_sports = summer_sports.concat(sports.slice(9));

winter_sports = sports.slice(0, 2);
winter_sports = winter_sports.concat(sports.slice(3, 5));

fruits = [];

//Filtering an array looking for fruits
for (i = 0; i < sports.length; i++) {
    if ((summer_sports.indexOf(sports[i]) == -1) && (winter_sports.indexOf(sports[i]) == -1))
        fruits[fruits.length] = sports[i];
}

console.log('***Winter sports***');
for (i = 0; i < winter_sports.length; i++)
    console.log(`${winter_sports[i][0]}: ${winter_sports[i][1]}`);

console.log('\n***Summer sports***');
for (i = 0; i < summer_sports.length; i++)
    console.log(`${summer_sports[i][0]}: ${summer_sports[i][1]}`);

console.log('\n***Fruits***');
for (i = 0; i < fruits.length; i++)
    console.log(`${fruits[i][0]}: ${fruits[i][1]}`);