let Login = document.getElementById("Login");
let closeicon = document.getElementById("iconspan");
let form = document.getElementById("form");
let container = document.querySelector(".container");
let first = document.querySelector(".first");
let Second = document.querySelector(".second");
let third = document.querySelector(".third");
let fourth = document.querySelector(".fourth");
let SignUpclose = document.getElementById("signupicon");
let SignUpForm = document.getElementById("formSign");
let SignUp = document.querySelector(".Signupbtn");
let MediaIcon = document.querySelector(".mediaspan");
let navitems = document.querySelector(".navitems");
let MediaUl = document.querySelector("ul.open");
 let line1 = document.querySelector(".line1");
 let line2 = document.querySelector(".line2");
 let line3 = document.querySelector(".line3");   
let IconClick = document.querySelector("div.open");

SignUpclose.addEventListener("click", ()=>{
    SignUpForm.style.opacity = "0"
    SignUpForm.style.transition = "0.3s ease-in";
})
third.addEventListener("click", ()=>{
  SignUpForm.style.opacity = "0"
  SignUpForm.style.transition = "0.3s ease-in";
})
fourth.addEventListener("click", ()=>{
  SignUpForm.style.opacity = "0"
  SignUpForm.style.transition = "0.3s ease-in";
})


closeicon.addEventListener('click', ()=>{
  form.style.opacity = "0";
  form.style.transition = "0.3s ease-in";
  closeicon.style.cursor = "pointer";
})
first.addEventListener('click', ()=>{
  form.style.opacity = "0";
  form.style.transition = "0.3s ease-in";
  first.style.cursor = "pointer";
})

Second.addEventListener('click', ()=>{
  form.style.opacity = "0";
  form.style.transition = "0.3s ease-in";
  Second.style.cursor = "pointer";
})



function LoginFormShow() {
  SignUpForm.style.opacity = "0"
    SignUpForm.style.transition = "0.3s ease-in";
    SignUpForm.style.left = "380px";
    form.style.opacity = "10";
    form.style.transition = "0.4s ease-in";
    form.style.zIndex = "111";
    form.style.left = "480px";
    SignUpForm.style.zIndex = "1";
}
function SignUpformShow(){
  form.style.opacity = "0";
  form.style.transition = "0.3s ease-in";
  form.style.left = "580px";
  SignUpForm.style.left = "480px";
   SignUpForm.style.opacity = "10"
   SignUpForm.style.transition = "0.3s ease-in";
   SignUpForm.style.zIndex = "111";
   form.style.zIndex = "1";
}


MediaIcon.addEventListener('click', ()=>{
  navitems.classList.toggle('open');
  MediaIcon.classList.toggle('open');
  Login.classList.toggle('open');
})

Login.addEventListener("click", ()=>{ 
if(SignUpForm.style.zIndex !== "111"){
  form.style.opacity = "10";
  form.style.transition = "0.3s ease-in";
  form.style.left = "480px";
}
else{
    Login.disabled = true;
    
}
})
