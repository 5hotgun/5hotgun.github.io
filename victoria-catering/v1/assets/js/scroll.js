const navigationScroll = (param) => {
    $('html, body').animate({
        scrollTop: $(`#${param}`).offset().top - 60
    }, 2000);
};
