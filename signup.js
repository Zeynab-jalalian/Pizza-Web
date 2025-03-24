/* Signup */
//validation email
document.getElementById("signup-email").addEventListener("input", function() {
    let emailInput = this.value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailPattern.test(emailInput)) {
        this.style.borderBottom = "2px solid green"; 
    } else {
        this.style.borderBottom = "2px solid red"; 
    }
    if (emailInput == "") {
        this.style.borderBottom = "1px solid #000"; 
    }

    
    toggleSignupButton();
});
//validation password
document.getElementById("signup-pass").addEventListener("input", function() {
    let passwordInput = this.value.trim();
    let passwordPattern = /^.{8,}$/;
    
    if (passwordPattern.test(passwordInput)) {
        this.style.borderBottom = "2px solid green"; 
    } else {
        this.style.borderBottom = "2px solid red"; 
    }
    if (passwordInput == "") {
        this.style.borderBottom = "1px solid #000"; 
    }

   
    toggleSignupButton();
});
//validation Confirm password
document.getElementById("signup-pass-confirm").addEventListener("input",function(){
    let password=document.getElementById("signup-pass").value.trim();
    let ConfirmPassword=this.value.trim();
    if(ConfirmPassword===password){
        this.style.borderBottom = "2px solid green"; 
    }else{
        this.style.borderBottom = "2px solid red"; 
    }
    if (ConfirmPassword == "") {
        this.style.borderBottom = "1px solid #000"; 
    }
    toggleSignupButton();
})
// validation Name
document.getElementById("signup-name").addEventListener("input",function(){
    let nameInput = this.value.trim();
    let namePattern = /^[a-zA-Z]{3,}$/;  

    if (!namePattern.test(nameInput)) {
        this.style.borderBottom = "2px solid red"; 
    } else {
        this.style.borderBottom = "2px solid green"; 
    } if (nameInput == "") {
        this.style.borderBottom = "1px solid #000"; 
    }
    
    toggleSignupButton(); 
})
//Signup status
function toggleSignupButton() {
    const name=document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-pass").value.trim();
    const ConfirmPassword=document.getElementById("signup-pass-confirm").value.trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^.{8,}$/;
    const namePattern = /^[a-zA-Z]{3,}$/;  

    if (namePattern.test(name) && emailPattern.test(email) && passwordPattern.test(password) && password===ConfirmPassword && email !== "" && password !== "" && ConfirmPassword!=="" && name!=="") {
        document.querySelector(".signup-btn").disabled = false;
        document.querySelector(".signup-btn").style.opacity = "1"; 
        document.querySelector(".signup-btn").style.cursor = "pointer"; 
    } else {
        document.querySelector(".signup-btn").disabled = true;
        document.querySelector(".signup-btn").style.opacity = "0.5"; 
        document.querySelector(".signup-btn").style.cursor = "no-drop"; 
    }
}
//click on signup btn
document.querySelector(".signup-btn").addEventListener("click", function() {
    if (!this.disabled) {
        const previousPage = document.referrer; 
        if (previousPage.includes("Login.html")) {
            window.location.href = "index.html"; 
        } else {
            window.location.href = previousPage || "index.html"; 
        }
    }
});