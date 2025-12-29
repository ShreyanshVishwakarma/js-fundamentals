//What is Hoisting?

//Hoisting is a behavior where the JavaScript engine moves declarations to the top of their scope before code execution.

//    The Myth: "JavaScript physically moves my code to the top."

//   The Reality: During the compilation phase (just before running), the engine scans for keywords (var, function, let) and allocates memory for them.

//The crucial detail: It hoists the Declaration, but NOT the Assignment.

console.log(myVar); // undefined (Not an error!)
var myVar = 10;
console.log(myVar); // 10

// function () {} are fully hoisted

//The Temporal Dead Zone (TDZ): This applies to let and const.
//Technically, let and const are hoisted. However, the engine puts them in a "holding cell" called the Temporal Dead Zone
//If you try to access them before the line where they are defined, JavaScript throws a ReferenceError.

// Start of Scope
// ... TDZ starts here ...
// ...
console.log(myLet); // CRASH: ReferenceError: Cannot access 'myLet' before initialization
// ...
let myLet = 20; // TDZ ends here. Variable is alive.
