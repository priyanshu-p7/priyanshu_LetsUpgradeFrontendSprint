document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

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

    // Animated Background
    const shapesContainer = document.querySelector('.background-shapes');
    const shapes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shape.className = `shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
        shape.style.cssText = `
            width: ${Math.random() * 100 + 50}px;
            height: ${Math.random() * 100 + 50}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            background: var(--shape-color);
            animation-delay: ${Math.random() * 20}s;
        `;
        shapesContainer.appendChild(shape);
    }

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.dataset.target;
                let count = 0;
                const duration = 2000;
                
                const updateCount = () => {
                    count += target / (duration / 16);
                    if (count < target) {
                        entry.target.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        entry.target.textContent = target + '+';
                    }
                }
                requestAnimationFrame(updateCount);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});




//  Add this JavaScript for Back to Top 
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.back-to-top');
    scrollBtn.classList.toggle('show', window.scrollY > 500);
});

// alert("the website is under maintenance right now live soon!")




   // FAQ Toggle Functionality
   document.querySelectorAll(".faq-question").forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentElement;
      parent.classList.toggle("active");

      // Close other open FAQs
      document.querySelectorAll(".faq-item").forEach((otherItem) => {
        if (otherItem !== parent) {
        //   otherItem.classList.remove("active");
        }
      });
    });
  });

  if (window.location.hash === "#faq-section") {
    const faqSection = document.getElementById("faq-section");
    faqSection.scrollIntoView({ behavior: "smooth" });
  }