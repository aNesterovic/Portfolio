arrA = [];
arrB = [];


//Ask a length of array
arrA.length = +prompt('Please enter length of array:');

//Input random numbers in array
toArray: for (i = 0; i < arrA.length; i++) {
    arrA[i] = Math.floor(Math.random() * arrA.length) + i;
    //Checks if it prime numbers
    for (j = 2; j < arrA[i]; j++) {
        if (arrA[i] % j === 0) {
            continue toArray;
        }
    }
    arrB[arrB.length] = arrA[i];
};

//Searching for max and min values
for (i = 0, minNumber = maxNumber = arrB[0]; i < arrB.length; i++) {
    if (minNumber > arrB[i]) {
        minNumber = arrB[i];
    };
    if (maxNumber < arrB[i]) {
        maxNumber = arrB[i];
    }
}

console.log(arrA);
console.log(arrB);
console.log(`Min number: ${minNumber}`);
console.log(`Max number: ${maxNumber}`);