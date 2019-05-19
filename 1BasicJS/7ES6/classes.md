# Classes

```js
class Vehicle {

};

class Car extends Vehicle {   
    constructor(initialKm, type) {
        super();

        this._km = initialKm;
        this._type = type;
    };

    get km() {
        return this._km;
    };

    set km(value) {
        this._km = value;
    };

    getKm() {
        return this._km;
    };

    drive(km) {
        this._km += km;
    };
};

const car = new Car(10000, "skoda");

car.km = 1000;
console.log(car.km);
console.log(car.getKm());
car.drive(10);
console.log(car.km);

```