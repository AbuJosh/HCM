document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);
        
        const img = document.createElement('img');
        img.src = this.querySelector('img').src;
        lightbox.appendChild(img);
        
        lightbox.addEventListener('click', function() {
            lightbox.remove();
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
