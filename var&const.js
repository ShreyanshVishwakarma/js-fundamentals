// I realized that i dont actually know the diff bw var ,let and const. really ?

function testvar() {
  for (var i = 0; i < 10; i++) {
    console.log(`${i} `);
    var rand = 23;
  }
  //trying to access i outside the loop
  console.log(i + 1);
  console.log(rand);
}

// hoisting and temporal dead zone :- vars are decalred at the top of scope with undefined, you can even access it before declaring

testvar(); // things decalred inside the loop are accessible outside the loop

// this function should give an error
function testlet() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
    var rand = 23;
  }
  //trying to access i outside the loop
  console.log(i + 1);
  console.log(rand);
}

//testlet();

function testcosnt() {
  // const creates an immutable binding, not an immutable object
  const x = 2;
  // x = 3; // error: Cannot assign to "x" because it is a constant
  const user = {
    name: "shreyansh",
    age: 20,
  };

  user.name = "Shreyansh Vishwakarma"; // this is allowed
  user.age = 21; // fine

  //user = { name: "yash" }; // this gives an error
}

testcosnt();
