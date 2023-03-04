'use strict';
// ===== 01 If Statements ===== //
// if (true) {
//     console.log('This is true');
// }
// if (false) {
//     console.log('This is not true');
// }
// const x: number = 20;
// const y: number = 50;
// if (x >= y) {
//     console.log(`${x} is grater than or equal to ${y}`);
// }
// if (x === y) {
//     console.log(`${x} is equal to ${y}.`);
// } else {
//     console.log(`${x} is not equal to ${y}.`);
// }
// if (x !== y) {
//     const z: number = 20;
//     console.log(`${z} is 20`);
// }
// Shorthand If
// if (x >= y) console.log(`${x} is grater than or equal to ${y}`);
// else console.log('This is false');
// const x: number = 4;
// if (x > 5) {
//     console.log(`${x} is greater than 5.`);
// } else {
//     console.log(`${x} is less than or equal to 5.`);
// }
// ===== 02 Else-if and Nesting ===== //
// const d: Date = new Date(10, 30, 2022, 20, 0, 0);
// const hour: number = d.getHours();
// if (hour < 12) {
//     console.log('Good Morning');
// } else if (hour < 18) {
//     console.log('Good Afternonn');
// } else {
//     console.log('Good Night');
// }
// Nested If
// if (hour < 12) {
//     console.log('Good Morning');
//     if (hour === 6) {
//         console.log('Wake Up');
//     }
// } else if (hour < 18) {
//     console.log('Good Afternonn');
// } else {
//     console.log('Good Night');
//     if(hour >= 20) {
//         console.log('zzzzzzzz');
//     }
// }
// if (hour >= 7 && hour < 15) {
//     console.log('It is work time');
// }
// if (hour === 6 || hour === 20) {
//     console.log('Brush your teeth!');
// }
// const date: Date = new Date();
// const hour: number = date.getHours();
// if (hour < 12) {
//     console.log('Good Morning!');
//     if (hour === 6) {
//         console.log('Wake up!');
//     }
// } else if (hour < 18) {
//     console.log('Good Afternoon!');
// } else {
//     console.log('Good Night!');
//     if (hour >= 20) {
//         console.log('zzzzzzz');
//     }
// }
// if (hour >= 7 && hour < 15) {
//     console.log('It is work time!');
// }
// if (hour === 6 || hour === 20) {
//     console.log('Brush your teeth!')
// }
// ===== 03 Switches ===== //
// const d: Date = new Date(2022, 1, 10, 19, 0, 0);
// const month: number = d.getMonth();
// const hour = d.getHours();
// switch(month) {
//     case 1:
//         console.log('It is January');
//         break;
//     case 2:
//         console.log('It is February');
//         break;
//     case 3:
//         console.log('It is March');
//         break;
//     default:
//         console.log('It is not Jan, Feb or March.');
// }
// switch (true) {
//     case hour < 12:
//         console.log('Good Morning');
//         break;
//     case hour < 18:
//         console.log('Good Afternoon');
//         break;
//     default:
//         console.log('Good Night');
// }
// const date: Date = new Date();
// const month: number = date.getMonth();
// const hour: number =  date.getHours();
// let msgMonth;
// let msgHour;
// switch (month) {
//     case 0:
//         msgMonth  = 'It is January';
//         break;
//     case 1:
//         msgMonth = 'It is February';
//         break;
//     case 2:
//         msgMonth = 'It is March'
//         break;
//     default:
//         msgMonth = 'It is April';
// }
// switch(true) {
//     case hour < 12:
//         msgHour = 'Good Morning! Have a productive day!';
//         break;
//     case hour < 18:
//         msgHour = 'Good Afternoon. I hope your day is going well!';
//         break;
//     default:
//         msgHour = 'Good Evening! Get some rest sir!';
// }
// console.log(msgMonth);
// console.log(msgHour);

// ===== 04 The Calculator Challange ===== //

// const calculationMachine = (numOne, numTwo, operator) => {
// 	let result;
// 	switch (operator) {
// 		case '+':
// 			result = numOne + numTwo;
// 			break;
// 		case '-':
// 			result = numOne - numTwo;
// 			break;
// 		case '*':
// 			result = numOne * numTwo;
// 			break;
// 		case '/':
// 			result = numOne / numTwo;
// 			break;
// 		default:
// 			result = 'Invalid input, please enter: +, -, *, /';
// 	}
// 	return result;
// };

// console.log(calculationMachine(5, 5, '+'));
// ==== 05 Truthy and Falsy ===== //

// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else than is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

// const x = () => {};

// if (x) {
//     console.log('This is truthy');
// } else {
//     console.log('This is falsy')
// }

// console.log(Boolean(x));

// Truthy and falsy caveats
// const children = 3;

// if (children !== undefined) {
// 	console.log(`You have ${children} children`);
// } else {
// 	console.log('Please enter number of children');
// }

// Checking for empty arrays

// const posts = ['Post One'];

// if (posts.length !== 0) {
// 	console.log('List Posts');
// } else {
// 	console.log('No Posts');
// }

// Checking for empty objects

// const user = {
//     name: 'Emilia'
// };

// if (Object.keys(user).length !== 0) {
// 	console.log('List User');
// } else {
// 	console.log('No User');
// }

// Loose Equality (==)
// console.log(false === 0)
// console.log('' === 0)
// console.log(null === undefined)

const email = 'Borderlandsmaniak@gmail.com';

if (email) {
	console.log('You passed an email');
} else {
	console.log('Please enter email');
}

const name = 'Radek';

console.log(!!name);

const x = 'false';

if (x) {
	console.log('This is truthy');
} else {
	console.log('This is falsy');
}

let children = 0;

if (!isNaN(children)) {
	console.log(`You have ${children} children`);
} else {
	console.log('Please enter the number of children you have');
}

const arr = [];

if (arr.length === 0) {
	console.log('This array is empty');
}

const obj = {};

if (Object.keys(obj).length === 0) {
	console.log('This object is empty');
}
