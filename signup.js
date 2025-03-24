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

    
    toggleLoginButton();
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

   
    toggleLoginButton();
});

//login status
function toggleLoginButton() {
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-pass").value.trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^.{8,}$/;


    if (emailPattern.test(email) && passwordPattern.test(password) && email !== "" && password !== "") {
        document.querySelector(".signup-btn").disabled = false;
        document.querySelector(".signup-btn").style.opacity = "1"; 
        document.querySelector(".signup-btn").style.cursor = "pointer"; 
    } else {
        document.querySelector(".signup-btn").disabled = true;
        document.querySelector(".signup-btn").style.opacity = "0.5"; 
        document.querySelector(".signup-btn").style.cursor = "no-drop"; 
    }
}
