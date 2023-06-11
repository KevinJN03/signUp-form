const btn = document.querySelector(".btn");
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")


function checkPassword(){
    console.log("Password: ", password.value)
    console.log("Confirm-Password: ", confirmPassword.value)
   if(password.value != confirmPassword.value ){
    console.log("not same")
    password.setCustomValidity("Passwords Don't Match");
    confirmPassword.setCustomValidity("Passwords Don't Match");
} else if (password.value === confirmPassword.value){
    console.log("same") 
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
} 
}


confirmPassword.onkeyup = function() {
    checkPassword()
}

