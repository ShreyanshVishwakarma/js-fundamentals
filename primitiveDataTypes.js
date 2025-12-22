// primitive data types are immutable : string , number , bollean , undefined , Null , and symbol

// primitives are immutable .... NOT an object and has no methods
// defaults to pass by value
// immutable

let str = "hello";
let str2 = "hello with single qoute which is identical to double quotes";
let x = 1;
let str3 = `Hello ${x}`;

console.log(str3.toUpperCase()); // what ??? string is an object ??

// string is not an object but js wraps it in String class when method is invoked, then it is discarded as well

// NUMBERS

let y = 10; // not an integer
console.log(x);

// all numbers are actually 64 bit floating point number

console.log(0.1 + 0.2 === 0.3); // false bcoz it equals something like 0.300000000001 or something

// NaN and infinity is also a number
console.log("hello" * 3); // NaN
console.log(1 + undefined); // NaN
console.log(3 / 0); // infinity

// BOOLEAN
//
// flase
// 0 and -0
// ""
// Null
// undefined
// NaN
//
// they are all equivalent to false in if statement
//
// rest all are true

if (null == undefined && false == 0 && !!null == !!"") {
  // !! is used to force a variable to become a boolean
  console.log("hello Dunitya!"); // this actually prints
}

// symbol :- I still dont undertand it

console.log(Symbol("id") === Symbol("id")); // false
