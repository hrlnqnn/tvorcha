document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.projects__title');
    const speed = title.getAttribute('data-speed');
    title.style.animationDuration = `${speed}s`;
});

