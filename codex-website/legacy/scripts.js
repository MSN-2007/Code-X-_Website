// Cursor follow effect on navbar with anticipation
const nav = document.querySelector('#navthing');
const detectionZone = 150;

document.addEventListener('mousemove', (e) => {
    const rect = nav.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const isAboveNav = e.clientY < rect.top;
    const isBelowNav = e.clientY > rect.bottom;
    const isNearNav = Math.abs(e.clientY - rect.top) < detectionZone ||
        (e.clientY >= rect.top && e.clientY <= rect.bottom);

    if (isNearNav) {
        nav.style.setProperty('--mouse-x', `${x}px`);
        nav.style.setProperty('--mouse-y', `${y}px`);

        let distance = 0;
        if (isAboveNav) {
            distance = rect.top - e.clientY;
        } else if (isBelowNav) {
            distance = e.clientY - rect.bottom;
        }

        const opacity = Math.max(0, 1 - (distance / detectionZone));
        nav.style.setProperty('--glow-opacity', opacity);
    } else {
        nav.style.setProperty('--glow-opacity', 0);
    }
});

// Fade away when mouse leaves the window
document.addEventListener('mouseleave', () => {
    nav.style.setProperty('--glow-opacity', 0);
});

// Cursor follow effect on team cards
const cards = document.querySelectorAll('.team-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});