let callModalClosed = true;
const showCallModal = () => {
    let callButtonPosition = callModalClosed ? -50 : 0;
    let callModalPosition = callModalClosed ? 0 : -100;
    $('.call-button-inner').css('transform', `translateX(${callButtonPosition}%)`);
    $('.call-modal').css('right', `${callModalPosition}%`);
    callModalClosed = !callModalClosed;
};
