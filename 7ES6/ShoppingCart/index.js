'use strict';
const ShoppingCart = require('./ShoppingCart');
const Product = require('./Product');
const Customer = require('./Customer');

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(new Product('tennis racket', 100, ['israel','usa','france'], true));
shoppingCart.addProduct(new Product('tennis ball', 20, ['israel','usa','france'], false));
shoppingCart.addProduct(new Product('hug', 0, ['israel'], false));

console.log(shoppingCart.totalPrice);
const shaike = new Customer('Shaike', 136);
try {
    shoppingCart.checkout(shaike);
} catch (error) {
    console.log(error);
}
console.log(shaike);

const shaike2 = new Customer('Shaike', 137);
shoppingCart.checkout(shaike2);
try {
    shoppingCart.ship('usa');
} catch (error) {
    console.log(error);
}
console.log(shoppingCart.products.length);
shoppingCart.ship('israel');
console.log(shoppingCart.products.length);