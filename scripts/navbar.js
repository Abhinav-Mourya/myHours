let three_line_btn=document.querySelector(".three_line");three_line_btn.addEventListener("click", vertical_navbar);


function vertical_navbar(){

let navbar=document.querySelector("#navbar>div:nth-child(2)");
navbar.classList.toggle("show");


}

document.querySelector("#navbar>div>img").addEventListener("click", image);

function image(){


    window.location.href="home_page.html";
}

document.querySelector("#navbar>div>p").addEventListener("click", open_signup);

function open_signup(){


    window.location.href="signup_page.html";
}