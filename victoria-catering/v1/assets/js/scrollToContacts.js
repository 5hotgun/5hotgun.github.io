function scrollToContacts() {
    $('.menu-modal').css('left', `-100%`);
    $('html, body').animate({
        scrollTop: $('#contacts').offset().top
    }, 1500);
}
