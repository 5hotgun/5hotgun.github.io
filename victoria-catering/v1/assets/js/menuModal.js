let menuModalClosed = true;
const showMenuModal = () => {
    let menuModalPosition = menuModalClosed ? 0 : -100;
    document.getElementById('menuModal').style.left = `${menuModalPosition}%`;
    menuModalClosed = !menuModalClosed;
};
