'use strict';
class Customer{
    constructor(name, balance){
        this._name = name;
        this._balance = balance;
    };

    get name() {
        return this._name;
    };

    get balance() {
        return this._balance;
    }

    buy(amount){
        this._balance -= amount;
    };
};

module.exports = Customer;