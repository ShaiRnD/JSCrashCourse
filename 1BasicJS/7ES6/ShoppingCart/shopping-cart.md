# Shopping Cart

## create a `ShoppingCart` class with the following funcionality

### methods
* `addProduct(product)` - will add a product to the shopping cart
* `get totalPrice()` - returns the total price
* `checkout(customer)` - will checkout the shopping cart, updating the customer balance. throw exception if the customer hasn't got enough money
* `ship(country)` - will ship all the products to the selected country. throwing exception if any product is not shippable to the specified country. successful `ship` will clear the shopping cart

## create a `Product` class 

### constructor(name, price, shippableTo, hasVAT)
* shipabbleTo ['israel','usa','france']
* hasVAT - should the price add 17%

## Create a `Customer` class

### constructor(name, balance)
* balance - the amount of money the customer has

### methods
* `buy(amount)` - updates the person balance

## Notes
use the CommonJS module system. use 4 files. one for each class and `index.js` to activate it all