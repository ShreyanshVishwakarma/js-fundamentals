// the standard way : Function

function sayHello(name) {
  console.log(`hello ${name}`);
}

sayHello("shreyansh");

console.log(add(1, 2)); // this works .... functions are fully hoisted so we can access it before declaration, I didn't know that;

function add(num1, num2) {
  return num1 + num2;
}

// Function expression :
// Note : No hoisting, we cannot access it before execution

const sayBye = function (name) {
  console.log(`Goodbye, ${name}`);
};

sayBye("shreyansh");

//IIFE : run the function as soon as it is declared

(function () {
  console.log("I run immediately and disappear!");
})();

// arrow function : most common

const divide = (a, b) => {
  return a / b;
};

const addnums = (a, b) => a + b;

console.log(divide(3, 4));
console.log(addnums(3, 4));

//Note: It does not have its own this context. It inherits this from the parent scope. (This is crucial for React).
// The Problem: Regular Functions the value of "this" depends on how the function is called, not where it is written.

const user = {
  name: "alice",
  sayHello: function () {
    console.log("immediate: " + this.name);
    setTimeout(function () {
      console.log("later: " + this.name);
    }, 20);
  },
};

user.sayHello();
// in global window , this becomes undefined

// same thing but using arrow funciton

const user2 = {
  name: "Bob",
  sayHello: function () {
    // this is the parent scope ie. user2
    setTimeout(() => {
      console.log("Hello " + this.name);
      //arrow function looks for this in current scope
      // if none are found then it looiks at the parents scope
    }, 20);
  },
};

user2.sayHello();

// using function constructor

const add2 = new Function("a", "b", "return a+b");
console.log(add2(2, 3));
