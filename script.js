const password = document.getElementById("password")
const eye = document.getElementById("eye")

eye.onclick = function(){
    // console.log(password.type);
    
    if (password.type == "password") {
        password.type = "text" 
        eye.src="images/Untitled design (1).png"
    }else if (password.type == "text") {
        password.type = "password" 
        eye.src="images/Untitled design.png"
    }
}