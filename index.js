
if (innerWidth > 375){
    document.querySelector(".hero img").setAttribute("src", "images/hero-desktop.jpg")
}

// document.querySelector("input").addEventListener("click", function(){
//     document.querySelector("input").classList.add("active")
// })


document.querySelector("input").addEventListener("focus", get)

function get(){
}


document.querySelector(".arrow").addEventListener("click", function(){

    var email = document.querySelector("input").value
    
    if(email.includes("@") === false){
        document.querySelector(".error").classList.add("show_err")
        document.querySelector(".email").classList.add("email_err")
        document.querySelector(".info").style.display = "block"
    }else{
        document.querySelector(".error").classList.remove("show_err")
        document.querySelector(".email").classList.remove("email_err")
        document.querySelector(".info").style.display = "none"
    }
})