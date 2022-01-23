function Product() { };

Product.prototype.getInfo = function () {
    return `
    Name: ${this.name}.
	Category: ${this.category}.
	Type: ${this.type}.
	Price: $${this.price}.
    `
}

function HomeProduct() { };

HomeProduct.prototype = Object.create(Product.prototype);
HomeProduct.prototype.category = 'Товары для дома';

function Dishes(name, price) {
    this.name = name;
    this.price = price;
};

Dishes.prototype = Object.create(HomeProduct.prototype);
Dishes.prototype.type = 'Посуда';

function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype = Object.create(HomeProduct.prototype);
Furniture.prototype.type = 'Мебель';

let table = new Furniture('Стол', 100);
let pan = new Dishes('Сковорода', 10)

console.log(table.getInfo());
console.log(pan.getInfo());