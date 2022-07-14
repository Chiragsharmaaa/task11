const myForm = document.querySelector('#my-form'); 
const msg = document.querySelector('.msg'); 

 
// // Listen for form submit 
myForm.addEventListener('submit', onSubmit); 
 
 
 
function onSubmit(e) { 
  e.preventDefault(); 
 
    let userName = document.getElementById("name").value; 
    let userEmail = document.getElementById("email").value; 
    let my_obj = { 
    name: userName, 
    email: userEmail 
    }; 
     
 
   
  let myObj_serialised = JSON.stringify(my_obj); 
  console.log(myObj_serialised); 
  localStorage.setItem('name',myObj_serialised); 
 
  /////////////////////////////////////////////////// 
   
  if(nameInput.value === '' || emailInput.value === '') { 
    // alert('Please enter all fields'); 
    msg.classList.add('error'); 
    msg.innerHTML = 'Please enter all fields'; 
 
    // Remove error after 3 seconds 
    setTimeout(() => msg.remove(), 3000); 

  } 
}
// console.log(localStorage.getItem('name')) 
let details = localStorage.getItem('name') 
 
const detailsReal = JSON.parse(details) 
// console.log(detailsReal); 
 
 
//creating elements 
const nameOfUser= document.createElement('h4') 
const emailOfUser = document.createElement('h6') 
nameOfUser.innerHTML = detailsReal.name 
emailOfUser.innerHTML = detailsReal.email 
 
//append this heading in a place 
//select parent tag 
const parent = document.querySelector('#users') 
parent.appendChild(nameOfUser) 
parent.appendChild(emailOfUser)