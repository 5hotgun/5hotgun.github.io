let menuModalClosed = true;
const showMenuModal = () => {
    let menuModalPosition = menuModalClosed ? 0 : -100;
    $('#menuTrigger').toggleClass('fa-bars fa-times')
    $('.menu-modal').css('left', `${menuModalPosition}%`);
    menuModalClosed = !menuModalClosed;
};
const menuScroll = (param) => {
    $('.menu-modal').css('left', `-100%`);
    $('html, body').animate({
        scrollTop: $(`#${param}`).offset().top - 60
    }, 800);
    menuModalClosed = !menuModalClosed;
};
