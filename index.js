document.querySelectorAll('.projectRow').forEach(row => {
    row.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            const link = row.getAttribute('data-link');
            if (link) window.location.href = link;
        }
    });
});