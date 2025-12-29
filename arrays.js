//Arrayssssssss

// The stack op
// Mutation in place : YES !

const nums = [1, 2];
const length = nums.push(3); // push return the inserted obh

console.log(nums); // [1, 2, 3]
console.log(length); // 3
console.log(nums.pop()); // pop removes the top last element and returns it

// queue operaiton : slow O(n) operaiton
// Mutation : YES !

{
  const nums = [2, 3];
  nums.unshift(1); // [1,2,3]

  const first = nums.shift(); // 1 , nums = [2,3]
}

// splice and slice

// slice : copies a portion of array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];

// Copy from index 1 to (not inclusive) 3
const arr_s = arr.slice(1, 3);

console.log(arr); // origninal unchanged
console.log(arr_s);

// splice : cutting into original and rewriting it
const months = ["Jan", "March", "April", "June"];

// 1. Fix the missing "Feb"
// At index 1, delete 0 items, insert "Feb"
months.splice(1, 0, "Feb");
// months is now ["Jan", "Feb", "March", "April", "June"]

// 2. Remove "June" (Index 4)
months.splice(4, 1);
// months is now ["Jan", "Feb", "March", "April"]

// Heigher order funciton in arrays : Crucial. Master .map(), .filter(), .reduce(), .find(), .some().

// map : creates a new array array.map(function(currentValue, index, Oriarray), thisArg)
const prices = [10, 20, 30];
const double = prices.map((x) => x * 2);
console.log(double); // [20. 40, 60]

//filter : a new array which is subset of the original:
// const newArray = array.filter(callbackFn(element, index, array), thisArg)

const age = [12, 34, 5, 67];
const adult = age.filter((x) => x > 18);

console.log(adult);

// reduce : reduces the entire array to a single value
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

const total = prices.reduce((acc, curr) => acc + curr, 0);

console.log(total);
