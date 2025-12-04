// Обєкти

// const { use } = require("react");

// const { use } = require("react")

// {
//     // key: value // властивість
// }

// const user = {
//     name: 'John',
//     age: 30,
//     isAdmin: true
// }

// console.log(user);
// console.log(user)

// user.name = 'Pete';

// delete user.name

// user.city = 'Kyiv';

// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const user = {
//     name: 'John',
//     age: 30,
//     isAdmin: true,
//     friends: ['Ann', 'Mike', 'Tom'],
//     address: {
//         city: 'Kyiv',
//         street: 'Main',
//     }
// }


// console.log(user.friends[0])

// console.log(user.address.city)


// const user = {
//     name: 'John',
//     age: 30,
//     isAdmin: true,
//     friends: [{ name: 'Ann', age: 44 }, { name: 'Mike', age: 43 }, { name: 'Tom', age: 42 }],
//     address: {
//         city: 'Kyiv',
//         street: 'Main',
//     }
// }

// console.log(user.friends[0].name);


// const user = {
//     name: 'John',
//     age: 30,
//     isAdmin: true,
//     showName: function(){
//         console.log("Hello my name is: " + this.name);
//     }
// }

// user.showName();

// function User(userName, userAge){
//     this.name = userName;
//     this.age = userAge;
//     this.showName = function(){
//         console.log("Hello my name is: " + this.name);
//     }
// }

// const user1 = new User('John', 30);
// const user2 = new User('Ann', 25);
// const user3 = new User('Mike', 35);

// // console.log(user1);
// user1.showName();
// user2.showName();
// user3.showName();

// class User {
//     constructor(userName, userAge){
//         this.name = userName;
//         this.age = userAge;
//     }

//     showName(){
//         console.log("Hello my name is: " + this.name);
//     }
// }

// const user1 = new User('John', 30);
// const user2 = new User('Ann', 25);
// // console.log(user1);
// user1.showName();
// user2.showName();

// Наслідування
// Поліморфізм
// Інкапсуляція
// Абстракція

// наслідування

// class Animal {
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, species){
//         super(name);
//         // this.name = name;
//         this.species = species;
//     }
//     speak(){
//         super.speak();
//         console.log(`${this.name} barks.`);
//     }
// }
// // const dog = new Dog('Rex');
// const dog = new Dog('Rex', 'German Shepherd');
// dog.speak(); // Rex makes a noise.
// console.log(dog.species);

// інкапсуляція
// публічі властивості і методи
// приватні властивості і методи
// class User {
//     #password; // приватне поле

//     constructor(username, password){
//         this.username = username;
//         this.#password = password;
//     }
//     // getter та setter
//     get password(){
//         return this.#password;
//     }

//     set password(newPassword){
//         if ( newPassword.length < 8 ){
//             console.log("Пароль занадто короткий. Мінімум 8 символів.");
//             return;
//         }
//         this.#password = newPassword;
//     }

// }

// const user = new User('john_doe', 'securePassword123');

// console.log(user.password); // securePassword123

// // user.password = "shortt"
// user.password = "newSecurePassword456"

// console.log(user.password); // newSecurePassword456

// console.log(user.username); // john_doe
// console.log(user.#password); // Error: Private field '#password' must be declared in an enclosing class