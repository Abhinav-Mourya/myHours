
let email_input=document.querySelector("#email");

email_input.addEventListener("focus", focus_email);
email_input.addEventListener("blur", blur_email);

function focus_email(){

   
    email_input.style.boxShadow="rgb(128,183,216) 0px 3px 8px";
   email_input.style.border="0px";
   email_input.style.marginBottom="10%";
  

}

function blur_email(){

    
    email_input.style.backgroundColor="white";
    email_input.style.border="1px solid";
    email_input.style.borderColor="rgb(201, 192, 192)";
    email_input.style.boxShadow="none";
    email_input.style.marginBottom="6%";
    
}








let password_input=document.querySelector("#password");
password_input.addEventListener("focus",focus_password);
password_input.addEventListener("blur", blur_password);

function focus_password(){

    password_input.style.boxShadow="rgb(128,183,216) 0px 3px 8px";
    password_input.style.border="0px";
    password_input.style.marginBottom="10%";

}

function blur_password(){

    password_input.style.backgroundColor="white";
    password_input.style.border="1px solid";
    password_input.style.borderColor="rgb(201, 192, 192)";
    password_input.style.boxShadow="none";
    password_input.style.marginBottom="6%";

}


document.querySelector("form").addEventListener("submit", check_data);


function check_data(event){

event.preventDefault();

let email_value=document.querySelector("#email").value;
let password_value=document.querySelector("#password").value;
let data_arr=JSON.parse(localStorage.getItem("person_details"));
let count=0;
data_arr.forEach(function(el){

if(email_value==el.person_email && password_value==el.person_password)
{
  count=1;
  window.location.href="home_page.html";
}

})

if(count==0)
{
  alert("Wrong credentials");
}
};


document.querySelector("#submit+p").addEventListener("click", reset_password);

function reset_password(){

window.location.href="reset_password_page.html";

}
