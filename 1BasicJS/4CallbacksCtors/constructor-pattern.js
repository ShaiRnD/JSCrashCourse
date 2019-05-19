// constructor function

const person = {
    name: "",
    height:123,
    age:12,
    address:""
};

// constructor pattern
function Person(name, height, age, address) {
    this.name = name;
    this.height = height;
    this.age = age;
    this.address = address;

    this.printDetails = () => console.log(this.name, this.height, this.age, this.address);
};

// const p = Person("", 123, 12, ""); // p is undefined because the functions doesn't return anything

const person1 = new Person("Gabi",1.74, 39, "Tel Aviv");

person1.printDetails();

console.log(typeof(person1));
console.log(typeof(person));

console.log(person1 instanceof Person);
console.log(person instanceof Person);


const person2 = new Person("Gabi2",1.74, 39, "Tel Aviv");

