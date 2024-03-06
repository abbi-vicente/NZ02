// Higher Order Functions
function calculate(num1, num2, operation) {
	return operation(num1, num2);
}

// Callback functions
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

// Using the higher-order function with callbacks
let result1 = calculate(5, 3, add);
let result2 = calculate(5, 3, subtract);

console.log("Addition: ", result1);
console.log("Subtraction: ", result2);
