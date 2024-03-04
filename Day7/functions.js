// Functions
function greet() {
	console.log("Hello, welcome to the world of functions");
}
greet();

// 2 Ways Function
// 1. function declaration
function squareDeclaration(num) {
	return num * num;
}

// 2. function expression
const squareExpression = function (num) {
	return num * num;
};

console.log("Square for Function Declaration: ", squareDeclaration(6));
console.log("Square for function expression: ", squareExpression(5));

// Function Hoisting - only works for function declaration
sayHello();

function sayHello() {
	console.log("Hello, Function Hoisting");
}

// helloExpression();

// const helloExpression = function () {
// 	console.log("Expression hoisting");
// };

// anonymous function
const anonymousFunction = function () {
	console.log("Hello anonymous function");
};

anonymousFunction();
