cardRow = [];
cardIcon = ['clubs', 'spades', 'diamonds', 'hearts'];
num = 2;
timesIcon = [];
cardPersonNumber = ['J', 'Q', 'K', 'T'];
cardPerson = ['jack', 'king', 'queen'];

//Set numbers of row (without last one)
for (i = 0; i < 6; i++) {
    for (j = 0; j < 8; j++) {
        //Describe for row with person card
        if ((i == 4 && j > 4) || i > 4) {
            for (cardPersonIndex = 0; cardPersonIndex < cardPerson.length; cardPerson++) {
                for (cardPersonNumberIndex = 0; cardPersonNumberIndex < cardPersonNumber.length - 1; cardPersonNumberIndex++) {
                    for (indexCardIcon = 0; indexCardIcon < cardIcon.length; indexCardIcon++) {
                        timesCard = [];
                        for (t = 1; t <= 2; t++) {
                            timesCard[timesCard.length] = `<div class="card__info">${cardPersonNumber[cardPersonNumberIndex]}<img src="images/${cardIcon[indexCardIcon]}.svg" alt="${cardIcon[indexCardIcon]}"></div>`
                            timesCard[timesCard.length] = `<img class="person" src="images/${cardPerson[cardPersonIndex]}.svg" alt="${cardPerson[cardPersonIndex]}">`
                        }
                        timesCard[timesCard.length - 1] = undefined;
                        cardRow[cardRow.length] = `<div class="card card--person">${timesCard.join('')}</div>`
                    }
                }
            }
        }
        //Describe for row with numbers card
        else {
            for (num; num <= 10; num++) {
                for (indexCardIcon = 0; indexCardIcon < cardIcon.length; indexCardIcon++) {
                    timesCard = [];
                    for (t = 1; t <= 2; t++) {
                        timesCard[timesCard.length] = `<div class="card__info">${num}<img src="images/${cardIcon[indexCardIcon]}.svg" alt="${cardIcon[indexCardIcon]}"></div>`;
                    }
                    cardRow[cardRow.length] = `<div class="card">${timesCard.join('')}</div>`
                }
            }
        }
    }
}
//Set the last row with person card
for (indexCardIcon = 0; indexCardIcon < cardIcon.length; indexCardIcon++) {
    timesCard = [];
    for (t = 1; t <= 2; t++) {
        timesCard[timesCard.length] = `<div class="card__info">${cardPersonNumber[cardPersonNumber.length - 1]}<img src="images/${cardIcon[indexCardIcon]}.svg" alt="${cardIcon[indexCardIcon]}"></div>`
        timesCard[timesCard.length] = `<img class="person" src="images/${cardIcon[indexCardIcon]}.svg" alt="${cardIcon[indexCardIcon]}">`
    }
    timesCard[timesCard.length - 1] = undefined;
    cardRow[cardRow.length] = `<div class="card card--person">${timesCard.join('')}</div>`
}
document.write(`<div class="wrapper">${cardRow.join('')}</div>`)