const person = {
    name:"Joe",
    print() {
        console.log(this.name);
    }
};

person.print();

const obj = {
    foo:1,
    name:"name",
    bar() {
        console.log(this.foo);
        const mockPrint = person.print;

        mockPrint.apply(this);
    }
};

obj.bar();


// -----------------


const x = 1;

function hey() {
    console.log(x);
};

hey();
