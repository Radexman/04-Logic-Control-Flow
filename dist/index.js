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
const date = new Date();
const hour = date.getHours();
if (hour < 12) {
    console.log('Good Morning!');
    if (hour === 6) {
        console.log('Wake up!');
    }
}
else if (hour < 18) {
    console.log('Good Afternoon!');
}
else {
    console.log('Good Night!');
    if (hour >= 20) {
        console.log('zzzzzzz');
    }
}
if (hour >= 7 && hour < 15) {
    console.log('It is work time!');
}
if (hour === 6 || hour === 20) {
    console.log('Brush your teeth!');
}
