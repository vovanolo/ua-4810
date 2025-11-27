// debugging

// console.log()
// let x = 10;
// let y = 20;

// console.log("x:", x);
// console.log("y:", y);
// let b = x + y;
// console.log("b:", b);

// let z = b * 3 + x + y

// console.log("z:", z);

// let a = 5;
// let c = 15;

// let d = a * c + 100;

// let e = d - a / 5;

// logical

// console.log(;

// console.log("hello");

// runtime - reference error

// printMe();

// try catch

// try{
//     console.log("Start of try section");
//     printMe();
//     console.log("End of try section");
// } catch(error){
//     console.log("Start of catch section");
// }

// try{
//     console.log("Start of try section");
//     printMe();
//     console.log("End of try section");
// } catch(error){
//     // console.log("Start of catch section");
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// new Error()
// new TypeError()
// new ReferenceError()
// new SyntaxError()
// new RangeError()

// throw new Error("This is a custom error message");

// try{
//     const age = prompt("Введіть ваш вік:");
//     if ( age < 0 ){
//         throw new Error("Вік не може бути від'ємним числом");
//     } else if ( isNaN(age) ){
//         throw new TypeError("Вік повинен бути числом");
//     }
//     console.log("Ваш вік:", age);
// }catch (error){
//     console.log(error.name);
//     console.log("Помилка:", error.message);
// }

// class AgeError extends Error {
//     constructor(message){
//         super(message);
//         this.name = "AgeError";
//     }
// }

// try{
//     const age = prompt("Введіть ваш вік:");
//     if ( age < 0 ){
//         throw new AgeError("Вік не може бути від'ємним числом");
//     }
//     console.log("Ваш вік:", age);
// }catch (error){
//     console.log(error.name);
//     console.log("Помилка:", error.message);
// }

// try{
//     console.log("Start of try section");
//     // printMe();
// }finally{
//     console.log("Finally section");
// }
// catch(error){
//     console.log("Catch section");
// }
