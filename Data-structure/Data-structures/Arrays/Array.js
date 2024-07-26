// ----------------------------------- Array --------------------------------
// Array - Big-O time complexity
// Insert / remove from end - O(1)
// Insert / remove from begginning - O(n)
// Access - O(1)
// Search - O(n)
// Push/Pop - O(1)
// Shift/unshift/concat/slice/splice - O(n)
// forEach/ map/filter/reduce O(n)

// ----------------------------------- Set --------------------------------
//  Use to remove duplicate elements from the array
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

//spreading numbers of the object into an array using the new operator
console.log([...new Set(numbers)]);

// ----------------------------------- Map --------------------------------

const map1 = new Map();

map1.set("a", 1);
// If want to check if a key exists in the map use method : has => return boolean result
console.log(map1.has("a"));
