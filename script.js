/* phone-container and personal account */
document.querySelector('.phone-dropdown-icon').addEventListener('click', function(event) {
    event.stopPropagation(); 
    document.querySelector('.phone-container').classList.toggle('open');
});

document.querySelector('.account-dropdown-toggle').addEventListener('click', function(event) {
    event.stopPropagation(); 
    document.querySelector('.personal-account').classList.toggle('open');
});

document.addEventListener('click', function(event) {
    
    if (!event.target.closest('.phone-container') && !event.target.closest('.personal-account')) {
        document.querySelector('.phone-container').classList.remove('open');
        document.querySelector('.personal-account').classList.remove('open');
    }
});
/* header-nav */
document.querySelectorAll(".header-nav  li a").forEach(item=>{
    item.addEventListener("click",function(){
        document.querySelector(".header-nav li a.active")?.classList.remove("active");
        this.classList.add("active");
    })
})


function toggleMenu() {
    let menu = document.querySelector(".header-nav");
    let icon = document.getElementById("hamburger-icon");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}