'use strict';
const arr = [];

// write a constructor function Product(name, price, currency, category, passedQA)
// implement the following functions in the constructor
// priceDollarPrice() - returns the price in dollars
// priceDollarPriceWithVAT() - returns the price in dollars with 17% VAT
// toString() - returns a string with all the product details

arr.push(new Product("tennis racket", 200, "dollar", "sports", true));

// filter the array to return only products that passed QA
// map the array to an array of prices including VAT in dollars
// reduce the array to sum of all the products in dollars
// reduce the array to an object like {sports: 300, beauty:500} (sum in dollars)
// print all the array using toString()


function Product(name, price, currency, category, passedQA){
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.category = category;
    this.passedQA = passedQA;

    this.priceDollarPrice = () => price;
    this.priceDollarPriceWithVAT = () => price * 1.17;
    this.toString = () => `${this.name} ${this.price} ${this.currency} ${this.category} ${this.passedQA}`;
};

console.log(arr[0]);
console.log(arr[0].priceDollarPrice());
console.log(arr[0].priceDollarPriceWithVAT());
console.log(arr[0].toString());

arr.push(new Product("squash racket", 300, "dollar", "sports", false));
arr.push(new Product("braw", 300, "dollar", "fashion", true));
arr.push(new Product("indian food", 450, "dollar", "food", true));

arr.filter(product => product.passedQA).forEach(product => console.log(product));
console.log(arr.map(product => product.priceDollarPriceWithVAT()));
console.log("");
console.log(arr.reduce((acc, cur) => acc + cur.priceDollarPrice(), 0));
console.log("");
const reducer = (acc, cur) => {
    acc[cur.category] = !acc[cur.category] ? cur.price : acc[cur.category] + cur.price;
    return acc;
};
console.log(arr.reduce(reducer, {}));
console.log("");
arr.forEach(item => console.log(item.toString()));

