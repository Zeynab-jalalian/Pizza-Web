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