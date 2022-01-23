let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

let Kitchen = { category: 'kitchen' };
let Devices = { category: 'devices' };
let Cosmetics = { category: 'cosmetics' };

function getNewProtoObject(arr, protoObj) {
    // debugger;
    let modifyArr = arr
        .map(obj => {
            let newObj = Object.create(protoObj);

            for (let key in obj) {
                newObj[key] = obj[key];
            }
            return newObj;
        })

    return documentObject(modifyArr, protoObj);
}


function documentObject(arr, protoObj) {
    let toWriteArr = arr
        .map(newObj => {
            let objName = newObj.type[0].toUpperCase() + newObj.type.slice(1);
            let objPrice = [];
            Array.isArray(newObj.price) ? objPrice = `${newObj.price[0]} - ${newObj.price[1]}` : objPrice = newObj.price;
            return `
        <div class="box__main"><img src="images/${newObj.category}/${newObj.type}.svg" alt="">
        <div>Name: <span>${objName}</span></div>
        <div>Price: <span>${newObj.price}</span></div>
        </div>
        `;
        })
        .join('');
    return `<p>Category: ${protoObj.category}</p>
<div class="main">${toWriteArr}</div>`
}

let newKitchen = getNewProtoObject(kitchenProducts, Kitchen);
let newDevice = getNewProtoObject(devicesProducts, Devices);
let newCosmetics = getNewProtoObject(cosmeticsProducts, Cosmetics);

document.write(newKitchen)
document.write(newDevice)
document.write(newCosmetics)
