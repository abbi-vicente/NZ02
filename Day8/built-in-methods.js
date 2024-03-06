// Strings
// .split
const message = "Hello, OneCoders!";
const words = message.split(", ");
console.log(words);

// includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const constainsWord = sentence.includes("fox");
console.log(constainsWord);

// length
const sampleString = "Welcome to Modern JS Features!";
const strLength = sampleString.length;
console.log(strLength);

// MATH
// max
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

// min
const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

// random - 0 (inclusive) and 1 (exclusive)
const randomValue = Math.random();
console.log(randomValue);

// floor
const roundedFloor = Math.floor(3.9);
console.log(roundedFloor);

// ceil
const roundedCeil = Math.ceil(3.8);
console.log(roundedCeil);

// round
const roundedValue = Math.round(3.2);
console.log(roundedValue);

// get random integer
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomInt = getRandomInt(1, 10);
console.log(randomInt);

// Other built-in methods
// Number.toFixed()
const fixedNumber = (3.1415923245436).toFixed(3);
console.log(fixedNumber);

// Date()
const currentDate = new Date();
console.log(currentDate);
