// MY Show Soundbar - Smooth scroll e interazioni
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Effetto pad e onde al passaggio del mouse sotto il logo
const logoEffects = document.getElementById('logoEffects');
if (logoEffects) {
    const pads = logoEffects.querySelectorAll('.pad');
    
    logoEffects.addEventListener('mouseenter', () => {
        logoEffects.classList.add('active');
    });
    
    logoEffects.addEventListener('mouseleave', () => {
        logoEffects.classList.remove('active');
        pads.forEach(p => p.classList.remove('active', 'glow'));
    });
    
    logoEffects.addEventListener('mousemove', (e) => {
        const rect = logoEffects.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        pads.forEach((pad, i) => {
            const padRect = pad.getBoundingClientRect();
            const padCenterX = padRect.left - rect.left + padRect.width / 2;
            const padCenterY = padRect.top - rect.top + padRect.height / 2;
            const dist = Math.hypot(x - padCenterX, y - padCenterY);
            
            pad.classList.remove('active', 'glow');
            if (dist < 60) {
                pad.classList.add('glow');
            } else if (dist < 100) {
                pad.classList.add('active');
            }
        });
    });
}

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 11, 13, 0.98)';
    } else {
        header.style.background = 'rgba(10, 11, 13, 0.95)';
    }
    lastScroll = currentScroll;
});
