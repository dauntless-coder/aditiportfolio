// Smooth scrolling for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});


// Navbar scroll effect (subtle change already in CSS variables)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    navbar.style.backgroundColor = window.scrollY > 50 ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)';
});


// Button press feedback: add a temporary 'pressed' class so user feels interaction
function addPressEffect(el) {
    if (!el) return;
    el.addEventListener('click', () => {
        el.classList.add('pressed');
        setTimeout(() => el.classList.remove('pressed'), 150);
    });
}

// Attach press effect to interactive controls (buttons and prominent links)
// include resume-button in press feedback targets so nav resume feels interactive
document.querySelectorAll('button, .cta-button, .project-link, .resume-button').forEach(addPressEffect);

// Note: details buttons and modal were removed per request — no modal logic remains.
// Note: details buttons and modal were removed per request — no modal logic remains.

// Resume link left to default behaviour: it uses target="_blank" in the markup
// so clicking it will open resume.pdf in a new tab. No interception is performed here.