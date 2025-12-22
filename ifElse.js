const user = "Alice";
if (user) {
  // Runs because "Alice" is a truthy string
  console.log("User exists");
}

// really do i need to explain if statements ?

//best practice : dont use nested ifs.

//this is bad
function login(user) {
  if (user) {
    if (user.password) {
      // login logic...
    }
  }
}

//this is better
function login2(user) {
  if (!user) return; // Guard 1
  if (!user.password) return; // Guard 2

  // login logic (flat and clean)
}

// The ternary operator ....    condition ? true : false
// BAD (Syntax Error)
// const status = if (isActive) { "Online" } else { "Offline" };

// GOOD
const status = isActive ? "Online" : "Offline";

// just remember don't nest ternary operators

// Switch statement : switch statement uses === internally

const x = "3";

switch (x) {
  case 5: // This will NOT run (string "5" !== number 5)
    console.log("Match");
    break;
}
