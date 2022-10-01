document.querySelector("form").addEventListener("submit",reset);

function reset(event){

    event.preventDefault();

    let email_value=document.querySelector("#email").value;
    console.log(email_value);
    if(email_value=="")
    {
        alert("enter email");
    }
    else{

        alert("Reset email sent. Check your inbox for instructions how to reset your password.");

        window.location.href="signin_page.html"
    }
    
}