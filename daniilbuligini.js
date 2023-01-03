"use strict";
// 1 problem

// function evenOdd() {
//     const number = prompt("Enter number:");

//   if (number % 2 == 0) {
//     console.log("The number is even.");
//   }else {
//     console.log("The number is odd.");
//   }
// }

// 2 problem
// let currentUserName = prompt("Enter your name: ");

// alert(`${currentUserName}`);

// console.log(currentUserName);

// 3 problem

// evenOdd();

// 4 problem
// const enterFruit = prompt("Enter your fruit: ");

// switch (enterFruit) {
//   case "apple":
//     alert( 'Apple Good' );
//     break;
//   case "plum":
//     alert( 'Plum nice' );
//     break;
//   case "mango":
//     alert( 'Mango Perfect' );
//     break;
//   default:
//     alert("This fruit it's soo good" );
// };
// 5 problem
// for (let i = 2; i <= 100; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// 6 problem
// let num;

// do {
//   num = prompt("Enter number: ", 0);
// } while (num >= 0 && num);

// 7 promlem
// let numbers = [10,12,42,55,100,90,32,55];
// console.log( numbers.filter(elem => elem % 5 == 0) );

// let result = [10, 55, 100, 90, 55];

// დანარჩენსაც გავაკეთებ, მოგვიანებით

// 8 problems
// let names = ["Gio","Luka","Nika","Ani","Eka","Nini","Sopo"];

// for (let i = 0; i < names.length; i++) {
//     if (names[i]==="Nika") {
//     continue;
//     }
//     console.log(names[i]);
// };

// 9 problems ვერ მივხვდი ვერაფერს

// 10

// function Admin(name) {
//   return name.isAdmin;
// }

// const user = {
//   isAdmin: true,
// };

// const user1 = {
//   isAdmin: false,
// };

// console.log(Admin(user));
// console.log(Admin(user1));

// 11 problems

// const numbers = [
//   1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
//   70, 34, 43, 189,
// ];
// const maxValue = Math.max.apply(null, numbers);

// console.log(maxValue);
// 12 problems
// const numbers = [
//   1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
//   70, 34, 43, 189,
// ];

// const minValue = Math.min.apply(null, numbers);

// console.log(minValue);
