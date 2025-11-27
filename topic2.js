// if else

// if (умова) { код який виконується, якщо умова істинна }


// const age = 15;

// if (age >= 18) {
//     console.log("Ви повнолітній");
// }

// if (age >= 18) {
//     console.log("Ви повнолітній");
// } else {
//     console.log("Ви неповнолітній");
// }

// if (age > 18) {
//     console.log("Ви повнолітній");
// } else if (age < 18) {
//     console.log("Ви неповнолітній");
// } else {
//     console.log("Вам рівно 18 років");
// }

// if (age > 20 && age < 30) {
//     console.log("Вам від 21 до 29 років");
// } else if (age >= 30 && age < 40) {
//     console.log("Вам від 30 до 39 років");
// } else {
//     console.log("Вам або менше 20, або більше 39 років");
// }

// switch case

// const age = 26;

// switch (age) {
//     case 18: // age === 18
//         console.log("Вам 18 років");
//         break;
//     case 25: // age === 25
//         console.log("Вам 25 років");
//         break;
//     default:
//         console.log("Вам не 18 і не 25 років");
//         break;
// }
// switch (true) {
//     case age > 20 && age < 30: // age === age > 20 && age < 30
//         console.log("Вам від 21 до 29 років");
//         break;
//     case age >= 30 && age < 40:
//         console.log("Вам від 30 до 39 років");
//         break;
// }


// масиви, цикли, функції

// масиви

// [elem1, elem2, elem3]

// const fruits = ["apple", "banana", "orange", "grape", 2,4,true, null, undefined];
// const fruits = ["apple" - 0, "banana" - 1, "orange -2, "grape" - 3];

// const fruits = ["apple", "banana", "orange", "grape"];


// console.log(fruits[0]);

// fruits[0] = "kiwi";

// fruits[4] = "mango";

// fruits[8] = "peach";

// console.log(fruits[5]);

// console.log(fruits);

// console.log(fruits.length);

// fruits.push("mango" , "peach");

// fruits.pop();


// fruits.shift();
// fruits.unshift("kiwi");


// console.log(fruits.slice(1,3));

// fruits.splice(1, 0, "cherry")
// fruits.splice(1, 1, "cherry")


// console.log(fruits);

// цикли

// while

// while (умова) { код який виконується, поки умова істинна }


// let i = 0; // 0

// while ( i <= 5 ){
//     console.log(i); // 0 1 2 3 4 5
//     i+=1; // i = 6
// }

// i -= 1;

// i++;
// i--;

// for ( let i = 10; i >= 0; i-=1){
//     console.log(i)
// }

// break
// continue

// for ( let i = 0; i <= 10; i+=1){
//     console.log(i)
//     if ( i === 5){
//         break;
//     }
// }

// for ( let i = 0; i <= 10; i+=1){
//     if ( i === 5){
//         continue;
//     }
//     console.log(i)
// }

const fruits = ["apple", "banana", "orange", "grape"];

// fruits = 2424;

// console.log(fruits);

// console.log(typeof fruits);

// for ( let i = 0; i < fruits.length; i+=1){
//     console.log(fruits[i]);
// }

// for of

// for (let fruit of fruits ){
//     // console.log(fruit);
//     if ( fruit === "orange"){
//         console.log("Знайшли апельсин!");
//         break;
//     }
// }


// for (let index in fruits ){
//     console.log(index);
//     console.log(fruits[index]);
// }

// Ecmascript

// функції

// function sayHello() {
//     console.log("Hello Guys");
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();


// function sum(a, b){
//     console.log(a + b);
// }


// sum(5, 10);
// sum()

// function sum(a, b){
//     return a + b;
// }

// const res =  sum(5, 10);

// console.log(res);

// console.log(sum(20, 30));


// function sum(){
//     // console.log( arguments );
//     let total = 0;
//     for ( let i = 0; i < arguments.length; i+=1){
//         total += arguments[i];
//     }
//     return total;   
// }

// console.log( sum(5, 10, 15, 20, 25) );
// console.log( sum(1, 2, 3) );
// console.log( sum(100, 200, 300, 400) );

// function saySalary(name, salary = 1000) {
//     console.log("Name: " + name + ", Salary: " + salary);
// }

// saySalary("John", 2000);
// saySalary("Alice");

// daclaration();

// expression();


// function daclaration(){
//     console.log("Hello from declaration");
// }

// let expression = function(a,b){
//     console.log("Hello from expression");
// }
// expression(5,10);

// forEach map filter find reduce

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(element, index){
//     // console.log(element);
//     // console.log(index);
// })

// let newNumbers = numbers.map(function(element, index){
//     // console.log(element);
//     return element * 2;
// })

// console.log(newNumbers);

// let filteredNumbers = numbers.filter(function(element, index){
//     return element > 2;
// })

// console.log(filteredNumbers);

// let foundNumber = numbers.find(function(element, index){
//     // return element === 3;
//     return element > 3;
// })

// console.log(foundNumber);

// let sum = numbers.reduce(function(sum, element){
//     return sum + element;
// }, 0)

// console.log(sum);