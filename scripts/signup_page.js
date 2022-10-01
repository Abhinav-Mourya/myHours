let submit_button=document.querySelector("#submit");

let name_input=document.querySelector("#name");
name_input.addEventListener("focus", focus_name);

function focus_name(){

    let person_name=document.querySelector("#name").value;
   let person_email=document.querySelector("#email").value;
   let person_password=document.querySelector("#password").value;
   
   if(person_name!="")
   {
     
    if(person_email!="" && person_password!="")
    {
      submit_button.style.backgroundColor="#3B8FC2";
    }

   }


}








let email_input=document.querySelector("#email");
email_input.addEventListener("focus", focus_email);

function focus_email(){

    let person_name=document.querySelector("#name").value;
   let person_email=document.querySelector("#email").value;
   let person_password=document.querySelector("#password").value;
   
   if(person_email!="")
   {
     
    if(person_name!="" && person_password!="")
    {
      submit_button.style.backgroundColor="#3B8FC2";
    }

   }


}





   let password_input=document.querySelector("#password");
   password_input.addEventListener("focus", focus_password);
   
   function focus_password(){
   
       let person_name=document.querySelector("#name").value;
      let person_email=document.querySelector("#email").value;
      let person_password=document.querySelector("#password").value;
      
      if(person_password!="")
      {
        
       if(person_name!="" && person_email!="")
       {
         submit_button.style.backgroundColor="#3B8FC2";
       }
   
      }

}

 
submit_button.addEventListener("click", add_data);

function add_data(event)
{
event.preventDefault();


let person_name=document.querySelector("#name").value;
let person_email=document.querySelector("#email").value;
let person_password=document.querySelector("#password").value;
let data_arr=JSON.parse(localStorage.getItem("person_details")) || [];

let object={};

object["person_name"]=document.querySelector("#name").value;
object["person_email"]=document.querySelector("#email").value;
object["person_password"]=document.querySelector("#password").value;


data_arr.push(object);

localStorage.setItem("person_details", JSON.stringify(data_arr));


if(person_name=="")
{
  alert("enter name first");
}
else if(person_email=="")
{
  alert("enter email first")
}
else if(person_password=="")
{
alert("Make passowrd first")
}
else
{
window.location.href="signup_page_2.html";
}

}
