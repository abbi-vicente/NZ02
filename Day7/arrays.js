let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits);

//Accessing individual elements
console.log("Third fruit: ", fruits[2]);
console.log("First fruit: ", fruits[0]);
console.log("Last fruit: ", fruits[fruits.length - 1]);

//Modifying elements
fruits[1] = "grape";
console.log(fruits);
fruits.push("strawberry");
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

//Array iteration
for (let i = 0; i < fruits.length; i++) {
	console.log("Fruits: ", fruits[i]);
}

let colors = ["red", "blue", "white", "yellow"];

colors.forEach(function (color) {
	console.log("Color: ", color);
});

fruits.unshift("lemon");
console.log(fruits);

// Common array methods

let numbers = [1, 2, 3, 4, 5];

//length
console.log("Array length: ", numbers.length);

//indexOf
console.log("Index of 3:", numbers.indexOf(3));
console.log("Index of white: ", colors.indexOf("white"));

//includes
console.log("Includes number 5: ", numbers.includes(5));
console.log("Includes number 7: ", numbers.includes(7));

//join
console.log("joined array: ", numbers.join("-"));

//slice
let slicedArray = numbers.slice(1, 4);
console.log("Sliced array: ", slicedArray);
console.log(numbers);

//splice
let removedElements = numbers.splice(2, 2);
console.log("Removed items: ", removedElements);
console.log("Updated array: ", numbers);
