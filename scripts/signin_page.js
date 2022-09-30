
let email_input=document.querySelector("#email");

email_input.addEventListener("focus", focus_email);
email_input.addEventListener("blur", blur_email);

function focus_email(){

   
    email_input.style.boxShadow="rgb(128,183,216) 0px 3px 8px";
   email_input.style.border="0px";
   email_input.style.marginBottom="10%";
  

   if(email_input.value=="")
   {
      email_input.insertAdjacentHTML("afterend","<p>Please enter a valid email</p>");
   }

}

function blur_email(){

    
    email_input.style.backgroundColor="white";
    email_input.style.border="1px solid";
    email_input.style.borderColor="rgb(201, 192, 192)";
    email_input.style.boxShadow="none";
    email_input.style.marginBottom="6%";
    
   document.querySelector("#email+p").remove();
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



