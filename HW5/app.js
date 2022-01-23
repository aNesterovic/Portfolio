debugger;
//Value's stage
totalSum = 0;
hamburgerPrice = 10;
cheeseburgerPrice = 15;
duobleCheesePrice = 10;
potatoPrice = '';
chooseSouce = '';

//Ask user type of bun
kindOfBun = prompt('Please choose Hamburger or Cheeseburger:');
kindOfBun = kindOfBun ? kindOfBun.replaceAll(' ', '').toLowerCase() : '';

//Check user answer
if (kindOfBun === 'hamburger') {
    totalSum += hamburgerPrice;
} else if (kindOfBun === 'cheeseburger') {
    totalSum += cheeseburgerPrice;
} else {
    document.write('<style> .bulka{display: none;} </style>')
}
//If user choose not hamburger or cheeseburger (for example - '111') don't ask.
if (kindOfBun === 'hamburger' || kindOfBun === 'cheeseburger') {
    isDoubleCheese = confirm('Would you add double cheese?');

    if (isDoubleCheese) {
        totalSum += duobleCheesePrice;
    };
};

//Ask user if he need potato
isPotato = confirm('Do you want potato?');

//Check user answer
if (isPotato) {
    potatoPrice = prompt('Please choose size of potato (small/middle/big):', 'small');
    potatoPrice = potatoPrice ? potatoPrice.replaceAll(' ', '').toLowerCase() : '';
    if (potatoPrice === 'small' || potatoPrice === 'middle' || potatoPrice === 'big') {
        switch (potatoPrice) {
            case 'small':
                totalSum += 10;
                break;
            case 'middle':
                totalSum += 15;
                break;
            case 'big':
                totalSum += 20;
                break;
        }
    } else {
        //Don't use default in switch becouse user can put not valid answer (such as '111')
        potatoPrice = 'small';
        totalSum += 10;
    }
} else {
    document.write('<style> .potato{display: none;} </style>')
}

//Ask user if need souce
isSouce = confirm('Would you like souce?');

//Check user answer
if (isSouce) {
    chooseSouce = prompt('Choose souce: ketchup/mayonnaise:', 'ketchup');
    chooseSouce = chooseSouce ? chooseSouce.replaceAll(' ', '').toLowerCase() : '';
    if (chooseSouce === 'ketchup' || chooseSouce === 'mayonnaise') {
        totalSum += 10;
    }
    //Use hardcode becouse user can put not valid answer(such as '111')   
    else {
        chooseSouce = 'ketchup';
        totalSum += 10;
    }
} else {
    document.write('<style> .souce{display: none;} </style>')
}

//Write user order
document.write(`
<style>
li {list-style-type: none;}
</style>
<h2>Your order:</h2>
    <ul>
        <li class = 'bulka'>Bulka 🍔: ${kindOfBun}</li>
        <li class = 'potato'>Potato 🍟: ${potatoPrice}</li>
        <li class = 'souce'>Sauce 🧂: ${chooseSouce}</li>
    </ul>
    <p>Price: $${totalSum}</p>
`);
