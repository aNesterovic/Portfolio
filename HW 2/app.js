let price = 0;

//Fruit prices
const applePrice = 10;
const orangePrice = 12;
const kiwiPrice = 15;

//Enter if you need fruit(methods - toLowerCase() adnd trim())
const isFruits = prompt("Do you want fruits?").toLowerCase().replaceAll(" ", "");

if (isFruits === "yes") {
    alert("Ok, let's start!\u{1F609}");
    //Do you need apple?
    const isApple = prompt("Do you want\u{1F34E}?");
    if (isApple === "yes") {
        //If yes enter q-ty of apple
        const qtyApple = +prompt("Enter count of\u{1F34E}.");
        //Total price with apple
        price += qtyApple * applePrice;
    }
    //Do you need orange?
    const isOrange = prompt("Do you want\u{1F34A}?");
    if (isOrange === "yes") {
        //If yes enter q-ty of orange
        const qtyOrange = +prompt("Enter count of\u{1F34A}.");
        //Total price with(if was) apple and orange
        if(!isNaN(qtyOrange)){
            price += qtyOrange * orangePrice;
        }   
    }
    //Do you need kiwi?
    const isKiwi = prompt("Do you want\u{1F95D}?");
    if (isKiwi === "yes") {
        //If yes enter q-ty of kiwi
        const qtyKiwi = +prompt("Enter count of\u{1F95D}.");
        //Total price with(if were) apple, orange and kiwi
        if(!isNaN(qtyKiwi)){
            price += qtyKiwi * kiwiPrice;
        }
    } else {
        //If you didn't found what you need - bye message
        alert("Oh, bye\u{1F61E}.");
    }
} else {
    //If you don't need fruit - bye message
    alert("Oh, bye\u{1F61E}.");
}

//Back total price of fruits.
document.write(`<h1>Final price is ${price}</h1>`);