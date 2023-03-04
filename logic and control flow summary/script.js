// ===== 01 If Statements ===== //
// if (true) {
// 	console.log('This is true');
// }

// if (false) {
// 	console.log('This is not true');
// }

// const x = 10;
// const y = 50;

// if (x >= y) {
// 	console.log(`${x} is greater than or equal to ${y}`);
// }

// if (x === y) {
// 	console.log(`${x} is equal to ${y}`);
// } else {
// 	console.log(`${x} is not equal to ${y}`);
// }

// if (x !== y) {
// 	const z = 20;
// 	console.log(`${z} is 20`);
// }

// Shorthand If statement

// if (x >= y) console.log(`${x} is greater than or equal to ${y}`);
// else console.log('This is false');

// ===== 02 Else If, Nesting ===== //
// const d = new Date();
// const hour = d.getHours();
// let message;

// if (hour < 12) {
// 	message = 'Good Morning!';
// } else if (hour < 18) {
// 	message = 'Good Afternoon!';
// } else {
// 	message = 'Good Night!';
// }

// console.log(message);

// Nested If
// if (hour < 12) {
// 	message = 'Good Morning!';

// 	if (hour === 6) {
// 		message = 'Wake Up!';
// 	}
// } else if (hour < 18) {
// 	message = 'Good Afternoon!';
// } else {
// 	message = 'Good Night!';

// 	if (hour === 21) {
// 		message = 'Enough work for today!';
// 	}
// }

// if (hour >= 7 && hour < 15) {
// 	message = 'Its the working time';
// }

// if (hour === 6 || hour === 20) {
// 	message = 'Brush your teeth';
// }

// console.log(message);

// ===== 03 Switches ===== //
const d = new Date(2023, 3, 10, 21, 13, 0);
const month = d.getMonth();
const hour = d.getHours();
let message;

// switch (month) {
// 	case 1:
// 		message = 'It is January';
// 		break;
// 	case 2:
// 		message = 'It is February';
// 		break;
// 	case 3:
// 		message = 'It is March';
// 		break;
// 	default:
// 		message = 'It is not Jan, Feb or March';
// }

// switch (true) {
// 	case hour < 12:
// 		message = 'Good Mornin!';
// 		break;
// 	case hour < 18:
// 		message = 'Good Afternoon!';
// 		break;
// 	default:
// 		message = 'Good Evening!';
// }

// console.log(message);

// ===== 04 Calculator Challange ===== //

// const calculator = (numberOne, numberTwo, operator) => {
// 	let result;
// 	switch (operator) {
// 		case '+':
// 			result = numberOne + numberTwo;
// 			break;
// 		case '-':
// 			result = numberOne - numberTwo;
// 			break;
// 		case '*':
// 			result = numberOne * numberTwo;
// 			break;
// 		case '/':
// 			result = numberOne / numberTwo;
// 			break;
// 		default:
// 			result = 'Invalid arythmetic operator';
// 	}
// 	console.log(result);
// 	return result;
// };

// calculator(5, 7, '+');

// ===== 05 Truthy Falsy ===== //
// const x = function () {};

// if (x) {
// 	console.log('This is truthy');
// } else {
// 	console.log('This is falsy');
// }

// console.log(!!x);

// Truthy and falsy caveats
// const children = 3;
// let formOutput;

// if (!isNaN(children)) {
// 	formOutput = `You have ${children} children.`;
// } else {
// 	formOutput = 'Please enter number of children';
// }

// console.log(formOutput);

// Checking for empty arrays
// const posts = ['Post One'];
// let postsMessage;

// if (posts.length !== 0) {
// 	postsMessage = 'List Posts';
// } else {
// 	postsMessage = 'No posts to show';
// }

// console.log(postsMessage);

// Checking for empty objects
// const user = {
// 	name: 'Emilia',
// };
// let userMessage;

// if (Object.keys(user).length !== 0) {
// 	userMessage = 'List User';
// } else {
// 	userMessage = 'No User';
// }

// console.log(userMessage);
// Loose Equality (==)
// console.log('' == 0);

// ===== 06 Logical Operators ===== //
// console.log(10 < 20 && 30 > 15 && 40 > 30);
// console.log(10 > 20 || 30 < 15);

// && - Will return first falsy value or the last value
// let a;

// a = 10 && 20;
// a = 10 && 20 && 30;
// a = 10 && 0 && 30;
// a = 10 && '' && 0 && 30;

// console.log(a);

// const posts = ['Post One', 'Post Two'];
// posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last value

// let b;
// b = 10 || 20;
// b = 0 || 20;
// b = 0 || null || '' || undefined;

// console.log(b);

// ?? - Returns the right side operand when the left is null or undefined
// let c;

// c = 10 ?? 20;
// c = null || 20;
// c = undefined || 30;

// console.log(c);
// ===== 07 Logical Assignment Operators ===== //
// let a = null;

// if (!a) {
// 	a = 10;
// }

// a = a || 10;

// a ||= 10;

// console.log(a);

// let b = 10;

// if (b) {
//     b = 20
// }

// b = b && 10;

// b &&= 10;

// console.log(b);

// let c = undefined;

// if (c === null || c === undefined) {
// 	c = 20;
// }

// c = c ??  20;

// c ??= 20;

// console.log(c);

// ===== 08 Ternary Operator ===== //
// const age = 23;
// let output;

// if (age >= 18) {
// 	output = 'You can vote!';
// } else {
// 	output = 'You can not vote!';
// }

// age >= 18 ? (output = 'You can vote!') : (output = 'You can not vote!');

// const canVote = age >= 18 ? 'You can vote!' : 'You can not vote';
// const canVote2 = age >= 18 ? true : false;

// console.log(canVote);
// console.log(canVote2);

// const auth = true;
// let redirect;

// if (auth) {
// 	alert('Welcome to the dashboard');
// 	redirect = '/dashboard';
// } else {
// 	alert('Access Denied');
// 	redirect = '/login';
// }

// const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Acces Denied'), '/login');

// console.log(redirect);
