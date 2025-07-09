
    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    


//  Add this JavaScript for Back to Top 
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.back-to-top');
    scrollBtn.classList.toggle('show', window.scrollY > 500);
});

