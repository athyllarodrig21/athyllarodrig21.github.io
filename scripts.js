document.addEventListener('DOMContentLoaded', function() {
    
    
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 5000); 


    document.getElementById('menu-toggle').addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('show');
    });

    
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
