//Arrow Functions
const greet = () => console.log("Hello OneCoder");

greet();

const square = (a) => console.log("Square: ", a * a);

square(5);

//Template literals
let name = "Abbi";
let age = 25;

// console.log("I'm " + name + "and I am "+ age + " years old");

console.log(`Hi! I'm ${name} and I am ${age} years old.`);

//Destructuring
//array
let nums = [24, 23, 13];

let [firstNum, secondNum, thirdNum] = nums;
console.log(`${firstNum}, ${thirdNum}, ${secondNum}`);

//objects
const numbers = {
	first: 1,
	second: 2,
	third: 3,
};

let { first, second, third } = numbers;
console.log(`First: ${first},
Second: ${second},
Third: ${third}`);

//Object literals

/* var person = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log('Hello!');
    }
} */

const person = {
	name,
	age,

	sayHello() {
		return `Hello! I'm ${name} and I am ${age} years old.`;
	},
};

console.log(person.sayHello());

//Spread and Rest
//Spread
function sum(x, y, z) {
	return x + y + z;
}

// let nums = [24, 23, 13];
console.log(sum(...nums));

//Rest
function myFunction(firstArg, ...restOfArgs) {
	console.log(firstArg);
	console.log(restOfArgs);
}

myFunction("one", "two", "three", "four");

//Default parameter
function multiply(a = 10, b = 5) {
	return a / b;
}

console.log(multiply());
console.log(multiply());
console.log(multiply(9, 6));
