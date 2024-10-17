// Initialize SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

// Function to handle scroll to top button
function scrollTop_btn() {
    let button = $('.footer__back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    });
}

// Initialize the scroll top button functionality
scrollTop_btn();
