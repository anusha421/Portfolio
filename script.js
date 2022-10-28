document.addEventListener('DOMContentLoaded',()=>{
    const navUL = document.querySelector('.nav-links');
    const hamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click',()=>{
        navUL.classList.toggle('visible');
    });
});