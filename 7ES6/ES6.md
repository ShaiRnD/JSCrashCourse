# ES6

## Object literals

```js
const x = 1;
const y = 2;

const obj = {
    x, // same as x:x
    y,  // same as y:y
    foo() { // same as foo: function {}

    }
};
```

## Default parameters

```js
function foo(a, b = 1) {

};
```

## Destructuring

```js
const person = { 
    name:"Joey", 
    age: 51, 
    address:"Belgrad", 
    occupation:"Marine Biologist", 
    salary:1000, 
    currency:"Pezos"
};

const { name } = person;
// same as "const name = person.name"

function printBasicDetails({name, age}) {
    console.log(name, age)
};

// function printBasicDetails(person) {
//     console.log(person.name, person.age)
// }

printBasicDetails(person);
```

## Spread operator

```js
const arr = [1,2,3];

const arr2 = [4,5,6, ...arr]; // 4,5,6,1,2,3

const person = { name:'a', age:1};
const personWithAddress = { ...person, address: "Tokyo"}; // {name:"a",age:1,address:"Tokyo"}

const personRenamed = {...person, name:"new name"}; // {name:"new name", age:1}

```

## Rest operator

```js
function printBills(name, ...bills) {
    console.log(name);
    console.log(bills.length); // bills is an array
    console.log(bills[2]); // electricity
}

printBills("Yael","arnona","water","electricity","gas");
```