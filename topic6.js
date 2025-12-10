// function handleClick() {
//     console.log('Element clicked');
// }

// const title = document.querySelector("#title");

// title.onclick = function(){
//     console.log('Element clicked - 2');
// }

// title.addEventListener("click", function(){
//     console.log('Element clicked - 3');
// })

// function handleClick() {
//     console.log('Element clicked - 4');
// }

// title.addEventListener("click", handleClick)

// title.addEventListener("click", function(event){
//     console.log(event.type);
//     console.log(event.target);
// })

// function handleClick(event) {
//     if(event.type === "click"){
//         console.log("Element clicked");
//     }
//     else if(event.type === "mouseover"){
//         console.log("Mouse over element");
//     }
// }

// title.addEventListener("click", handleClick)
// title.addEventListener("mouseover", handleClick)

// title.addEventListener("click", function(event){
//     // console.log(event.target)
//     event.target.style.color = "red";
// });

// const title = document.querySelector("#title");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function(){
//     // title.style.color = "blue";
//     title.classList.add("title-style");
// });

// const title = document.querySelector("#title");

const registrationForm = document.querySelector("#registrationForm");
const usersList = document.querySelector("#userList");
// console.log(usersList);

// console.log(registrationForm);

// registrationForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     // console.log("Form submitted");
//     console.log(event.target.elements.name.value);
//     console.log(event.target.elements.email.value);

// });


// registrationForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     // console.log("Form submitted");
//     // console.log(event.target.elements.name.value);
//     // console.log(event.target.elements.email.value);
//     let username = event.target.elements.name.value;
//     let useremail = event.target.elements.email.value;
//     usersList.innerHTML += `<li> Name: ${username} - Email: ${useremail}</li>`;

// });