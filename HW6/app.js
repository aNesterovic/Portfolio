sumOfFactorial = 0;
//Get from user number and check if it is not a number
do {
    a = +prompt('Please enter number of a:').trim();
} while (isNaN(a));

do {
    b = +prompt('Please enter number of b:').trim();
} while (a > b || isNaN(b));

do {
    h = +prompt('Please enter number of h:').trim();
} while (isNaN(h) || h < 0);

//Calculate a factorial from users value's with step of h
for (; a < b; a += h) {
    for (j = 1, f = 1; j <= a; f *= j, j++) { };
    //Summarize a factorial of values
    sumOfFactorial += f;
};
console.log(sumOfFactorial);