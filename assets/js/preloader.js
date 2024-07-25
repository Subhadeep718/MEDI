window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.querySelector('.main');
    const delay = 2000; 

    setTimeout(function() {
        preloader.style.display = 'none'; 
        mainContent.style.display = 'block'; 
    }, delay);
});