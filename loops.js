// for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//while loop

let health = 10;

while (health) {
  console.log(health);
  health--;
}

//do-while loop .... you know about it

// for --- of loop : The modern standard, best for arrays , async friendly

const heroes = ["Batman", "Superman", "Wonder Woman"];

for (const hero of heroes) {
  console.log(hero);
}

// for-in loop : good for objects

const user = {
  name: "Alice",
  age: 25,
  role: "Admin",
  isActive: true,
};

for (const key in user) {
  // 1. Get the key
  console.log("Key:", key);

  // 2. Get the value (Must use bracket notation!)
  console.log("Value:", user[key]);
}

// break; conitnue; self expalantory
