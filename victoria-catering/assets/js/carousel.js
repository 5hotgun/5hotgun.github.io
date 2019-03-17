$(document).ready(() => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        // autoplay: true,
        // autoplayTimeout: 5000,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            425: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
});
