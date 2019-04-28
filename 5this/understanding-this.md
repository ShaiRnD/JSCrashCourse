# Understanding `this`

In JS, each function execution receives 2 implicit values:

* `arguments` - array-like object
* `this`

```js
function foo() {
  console.log(arguments[0]); // will output the first parameter passed
  console.log(this); // so what is this ?
};
```

**Only the way in which we execute our function**, determines the value of `this`

## Executing a function in JS

There are 4 ways to execute (or invoke) a function in JS:

### 1. The function invocation pattern: 
   
```js
function foo () {
  // this will be the global object ('window' in the browser)
};

foo();
```

### 2. The method invocation pattern: 

```js
const obj = {
  name:"foofoo",
  foo: function () {
    // 'this' point to obj
    console.log(this.name);
  }
};

obj.foo(); // will print "foofoo"
```
### 3. The constructor invocation pattern

```js
function Car() {
  // this is an empty object at first {}
  // and is augmented through the constructor function
};

var car = new Car();
```

To learn about the ES5 constructor pattern 
[click here](../5ctors/constructor-pattern.js)

### 4. Using bind, apply, call

```js
function foo() {
  // this is determined by bind,apply,call first parameters
  // foo's arguments is determined by bind,apply,call as well
}

foo.bind()
foo.apply()
foo.call()

```

## Quiz - what is the value of `this` ?

```js
var obj = {
  foo: function () {
    console.log(this);
  }
}

obj.foo(); // will output `obj`

var mySpecialFoo = obj.foo;
mySpecialFoo() // will output `window`
```

```js
function func() {
  console.log(this);
}

var obj = {
  foo: function() {
    func(); 
  }
}

obj.foo(); // will output 'window'
```

```js
function func(a) {
  console.log(a);
}

var obj = {
  foo: function() {
    func(this); 
  }
}

obj.foo(); // will output 'obj
```
