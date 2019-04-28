'use strict';
class ShoppingCart{
    constructor(){
        this._products = [];
    };

    get products() {
        return this._products;
    }

    addProduct(product){
        this._products.push(product);
    };

    get totalPrice(){
        return this._products.reduce((acc, cur) => acc + cur.price, 0);
    };

    checkout(customer){
        const totalPrice = this.totalPrice;
        if(totalPrice > customer.balance){
            throw `Not enough money for customer ${customer.name}, cost:${totalPrice}, customer balance:${customer.balance}`;
        }
        customer.buy(customer.balance);
    };

    ship(country){
        const badProductFound = this._products.find(({shippableTo}) => !shippableTo.includes(country))
        if(badProductFound){
            throw `product ${badProductFound.name} not shippable to ${country}`;
        }
        this._products.length = 0;
    };
};

module.exports = ShoppingCart;