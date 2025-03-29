//validation email
document.getElementById("forgot-password-input").addEventListener("input", function() {
    let emailInput = this.value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailPattern.test(emailInput)) {
        this.style.border = "2px solid green"; 
    } else {
        this.style.border = "2px solid red"; 
    }
    if (emailInput == "") {
        this.style.border = "1px solid #000"; 
    }

    
    toggleLoginButton();
});
function toggleLoginButton() {
    const email = document.getElementById("forgot-password-input").value.trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  

    if (emailPattern.test(email)  && email !== "") {
        document.querySelector(".forgot-pass-btn").disabled = false;
        document.querySelector(".forgot-pass-btn").style.opacity = "1"; 
        document.querySelector(".forgot-pass-btn").style.cursor = "pointer"; 
    } else {
        document.querySelector(".forgot-pass-btn").disabled = true;
        document.querySelector(".forgot-pass-btn").style.opacity = "0.5"; 
        document.querySelector(".forgot-pass-btn").style.cursor = "no-drop"; 
    }
}