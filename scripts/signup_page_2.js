

let submit_button=document.querySelector("#submit");
submit_button.addEventListener("click", add_data);

function add_data(event)
{
event.preventDefault();


let person_company_name=document.querySelector("#name").value;
let person_country=document.querySelector("#country").value;
let person_company_size=document.querySelector("#size").innerText;
let person_mobile=document.querySelector("#mobile").value;
let data_arr=JSON.parse(localStorage.getItem("person_company_details")) || [];

let object={};

object["person_company_name"]=document.querySelector("#name").value;
object["person_country"]=document.querySelector("#country").value;
object["person_mobile"]=document.querySelector("#mobile").value;


data_arr.push(object);

localStorage.setItem("person_company_details", JSON.stringify(data_arr));


if(person_company_name=="")
{
  alert("enter company name first");
}
else if(person_country=="")
{
  alert("select country first")
}
else
{
window.location.href="signup_page_end.html";
}

}


let company_size_one=document.querySelector("#one");
let company_size_two=document.querySelector("#two");
let company_size_three=document.querySelector("#three");
let company_size_four=document.querySelector("#four");
let company_size_five=document.querySelector("#five");


company_size_one.addEventListener("click",colorChange);
company_size_two.addEventListener("click",colorChange);
company_size_three.addEventListener("click",colorChange);
company_size_four.addEventListener("click",colorChange);
company_size_five.addEventListener("click",colorChange);


function colorChange(event){
  company_size_one.style.backgroundColor="#EAF3F9";
  company_size_two.style.backgroundColor="#EAF3F9";
  company_size_three.style.backgroundColor="#EAF3F9";
  company_size_four.style.backgroundColor="#EAF3F9";
  company_size_five.style.backgroundColor="#EAF3F9";
  event.target.style.backgroundColor="#90a8b8";

}
