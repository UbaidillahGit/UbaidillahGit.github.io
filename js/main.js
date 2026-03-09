// Reset scroll on load (prevent hash-based auto-scroll)
if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
}
window.scrollTo(0, 0);
requestAnimationFrame(() => {
    document.documentElement.classList.add('loaded');
});

// Theme
const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const html = document.documentElement;

function setTheme(t) {
    html.setAttribute('data-theme', t);
    icon.innerHTML = t === 'dark' ? '&#9788;' : '&#9790;';
    localStorage.setItem('portfolio-theme', t);
}

toggle.addEventListener('click', () => {
    setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

const saved = localStorage.getItem('portfolio-theme');
if (saved) setTheme(saved);

// Mobile nav
document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// Typing animation
(function() {
    const phrases = [
        'Will Code for Coffee & Wi-Fi',
        '404: Work-Life Balance Not Found',
        'I mass produce bugs, then mass fix them',
        'Turning Caffeine into Production Bugs Since 2018',
        'git commit -m "fix: everything"',
        'It Works on My Machine ¯\\_(ツ)_/¯',
    ];
    const el = document.getElementById('typingText');
    const dot = el.closest('.hero-status').querySelector('.dot');
    const colors = ['green', 'red'];
    let phraseIdx = 0, charIdx = 0, deleting = false;

    function setColor(idx) {
        const c = colors[idx % colors.length];
        el.className = 'typing-' + c;
        dot.className = 'dot typing-dot-' + c;
    }

    function type() {
        const current = phrases[phraseIdx];
        if (!deleting) {
            if (charIdx === 0) setColor(phraseIdx);
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) {
                setTimeout(() => { deleting = true; type(); }, 2000);
                return;
            }
            setTimeout(type, 60);
        } else {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                setTimeout(type, 400);
                return;
            }
            setTimeout(type, 30);
        }
    }
    type();
})();

// Scroll animations
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
