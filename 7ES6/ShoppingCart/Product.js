'use strict';
class Product{
    constructor(name, price, shippableTo, hasVAT){
        this._name = name;
        this._price = price;
        this._shippableTo = shippableTo;
        this._hasVAT = hasVAT;
    };

    get shippableTo() {
        return this._shippableTo;
    }

    get name() {
        return this._name;
    }

    get price(){
        return this._hasVAT ? this._price * 1.17 : this._price;
    };
};

module.exports = Product;