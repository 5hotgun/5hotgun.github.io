let menuModalClosed = true;
const showMenuModal = () => {
    let menuModalPosition = menuModalClosed ? 0 : -100;
    $('.menu-modal').css('left', `${menuModalPosition}%`);
    menuModalClosed = !menuModalClosed;
};
