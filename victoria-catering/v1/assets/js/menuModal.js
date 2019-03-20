let menuModalClosed = true;
const showMenuModal = () => {
    let menuModalPosition = menuModalClosed ? 0 : -100;
    $('#menuTrigger').toggleClass('fa-bars fa-times')
    $('.menu-modal').css('left', `${menuModalPosition}%`);
    menuModalClosed = !menuModalClosed;
};
