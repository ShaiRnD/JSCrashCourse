## Object literal
```js
const person = {
    id: 1234,
    isEmployee: true,
    name: "gabi",
    message: "hello",
    cars: ["audi"],
    mainCar: "audi",
    vacationCar: "mazda"
};
```

```js
console.log(person);
person.id; // = 1234
const rideType = "vacation";
person[rideType + "Car"]; // = mazda
person.vacationCar; // mazda

for (const key in person) {
    console.log(person[key])
}
```

## Extending objects
```js
const obj = {a:1};
obj.b = 2;
obj["c"] = 3;

console.log(obj); // {a:1, b:2, c:3}

delete obj.b;

console.log(obj); // {a:1, c:3}
```

## Using Object methods

```js
const obj = {a:1,b:2,c:3};

console.log(Object.keys(obj)); // ["a","b","c"]
console.log(Object.values(obj)); // [1,2,3]
```
---
## Functions

**Functions are values!**


Defining functions
```js
function sum(a,b) {
    return a + b;
}

const sum = function(a, b) {
    return a + b;
};
```

Defining methods (functions that are inside objects)
```js
const person = {
    firstName: "Gabi",
    lastName: "Mor",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
```

```js
const func = function() {
    console.log("hey")
};

const obj = {
    func : func
};

//ES6
const obj = {
    age: 10,
    id: 1234,
    func // like func : func
};

```

ES6 style
```js
const person = {
    firstName: "Gabi",
    lastName: "Mor",
    fullName(){
        const message = `hey ${this.firstName} ${this.lastName}`;

        // return this.firstName + " " + this.lastName
        return message;
    }
};
```

`arguments` - array-like object
* There is no corellation between number of parameters supplied and arguments received
* Each function call receives two implicit values: `this` and `arguments`

```js
function sum(){
    let sum = 0;
    for (const item of arguments) {
        sum += item;
    }
    return sum;
}

console.log(sum(1,2,3,4,5)); //15
```
