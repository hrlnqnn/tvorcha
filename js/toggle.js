document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.answer__item');

    items.forEach(item => {
        const toggle = item.querySelector('.answer__toggle');

        toggle.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
