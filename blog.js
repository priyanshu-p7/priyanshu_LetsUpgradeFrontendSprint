// blog.js
// Cyberpunk Interactive Experience

class CyberBlog {
    constructor() {
      this.cards = document.querySelectorAll('.blog-post');
      this.initParallax();
      this.initIntersectionObserver();
      this.initParticleFields();
      this.initHolograms();
    }
  
    initParallax() {
      document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        this.cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const cardX = (rect.left + rect.width/2 - window.innerWidth/2) * 0.1;
          const cardY = (rect.top + rect.height/2 - window.innerHeight/2) * 0.1;
          
          card.style.transform = `
            perspective(2000px)
            rotateX(${mouseY + cardY}deg)
            rotateY(${mouseX + cardX}deg)
            translateZ(${Math.abs(mouseX * 2)}px)
          `;
        });
      });
    }
  
    initIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in-view');
              this.activateParticles(entry.target);
            }, index * 200);
          }
        });
      }, { threshold: 0.3 });
  
      this.cards.forEach(card => observer.observe(card));
    }
  
    initParticleFields() {
      this.cards.forEach(card => {
        const particles = document.createElement('div');
        particles.className = 'cyber-particles';
        card.appendChild(particles);
        
        for (let i = 0; i < 30; i++) {
          const particle = document.createElement('div');
          particle.className = 'cyber-particle';
          particle.style.cssText = `
            --x: ${Math.random() * 100}%;
            --y: ${Math.random() * 100}%;
            --delay: ${Math.random() * 2}s;
            --duration: ${2 + Math.random() * 3}s;
          `;
          particles.appendChild(particle);
        }
      });
    }
  
    activateParticles(card) {
      const particles = card.querySelectorAll('.cyber-particle');
      particles.forEach(particle => {
        particle.style.animation = 
          `cyberDrift var(--duration) var(--delay) infinite linear`;
      });
    }
  
    initHolograms() {
      document.addEventListener('mousemove', (e) => {
        this.cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          card.style.setProperty('--hologram-x', `${x}px`);
          card.style.setProperty('--hologram-y', `${y}px`);
        });
      });
    }
  }
  
  // Initialize Cybernetic System
  new CyberBlog();
  
  // Dynamic Theme Adaptation
  document.addEventListener('themeChanged', () => {
    document.documentElement.style.setProperty(
      '--bloom-intensity', 
      document.documentElement.dataset.theme === 'dark' ? '12px' : '8px'
    );
  });
  
  // Particle Animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes cyberDrift {
      0% { transform: translate(0, 0); opacity: 0; }
      20% { opacity: 1; }
      100% { transform: translate(
        calc(var(--x) * 2 - 100%), 
        calc(var(--y) * 2 - 100%)
      ); opacity: 0; }
    }
    
    .cyber-particles {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    
    .cyber-particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: var(--accent-color);
      border-radius: 50%;
      left: var(--x);
      top: var(--y);
      filter: blur(1px);
    }
  `;
  document.head.appendChild(style);