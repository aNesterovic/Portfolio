///////////////////Another code for this homework///////////////////
obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30,
        convert,
    },
    foo2: {
        k: 23,
        p: 13,
        convert,
    },
    convert,
}

let newObj = {};
function convert(modifyObj) {

    for (let key in this) {
        typeof this[key] === 'object' ? this[key].convert(modifyObj) : modifyObj[key] = this[key];
    }
}

obj.convert(newObj);

console.log(newObj)

///////////////////My solution for this homework///////////////////

// obj = {
//     x: 10,
//     y: 20,
//     inner: {
//         x: 20,
//         z: 30
//     },
//     foo2: {
//         k: 23,
//         p: 13
//     }
// }


// function convert(obj) {
//     let result = {};
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             let innetObj = obj[key]
//             for (let key in innetObj) {
//                 result[key] = innetObj[key]
//             }
//         } else {
//             result[key] = obj[key]
//         };
//     }
//     return result;
// }

// let newObj = convert(obj);

// console.log(newObj)