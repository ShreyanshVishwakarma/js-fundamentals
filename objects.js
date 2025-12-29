// objects in js are just key value store

const user = {
  name: "shreyansh",
  age: 12,
  gender: "spoon",
};

// dot notation

console.log(user.name);
console.log(user["name"]);

console.log(user.some); // undefined
console.log(user["some"]); // undefined

//console.log(user.some.somesome); // error

console.log(user.some?.somesome); // undefined

const { name, age } = user;

console.log(name + age); // shreyansh12

// copying an object

const user2 = user; // passes a ref
user2.age = 20;

console.log(user.age); // 20

// instead : use ...  : BUT This is just a shallow copy , nested Objects are still referenced

const user3 = { ...user };
user3.name = "shrey";
console.log(user.name); // shreyansh

// Enhanced Object Literals (Shorthand)
{
  //Concept: Less typing.
  const name = "Alice";
  const age = 25;

  // OLD
  // const user = { name: name, age: age };

  // NEW
  const user = { name, age };
}

// looping over objects

const scores = { math: 90, english: 80 };

Object.keys(scores).forEach((subject) => {
  console.log(`Subject: ${subject}, Score: ${scores[subject]}`);
});

// deep copy hack
const deep_user = JSON.parse(JSON.stringify(user));
console.log(deep_user);

//Modern (2024+): structuredClone(object) (Native browser support).

//Library: _.cloneDeep(object) (from Lodash library - industry standard).

// immutable objects // shallow

const config = Object.freeze({
  port: 3000,
});

//config.port = 80; // error
