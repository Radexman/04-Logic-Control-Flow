"use strict";
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
