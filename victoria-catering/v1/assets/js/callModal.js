// Состояние модального окна
let callModalClosed = true;
const showCallModal = (param) => {
    // Поменять заголовок окна
    if(callModalClosed) document.getElementById('callModalTitle').innerHTML = param;
    // Положение элементов в зависимости от состояния окна
    let callButtonPosition = callModalClosed ? -50 : 0;
    let callModalPosition = callModalClosed ? 0 : -100;
    // Изменить положение элементов
    document.getElementById('callButtonInner').style.transform = `translateX(${callButtonPosition}%)`;
    document.getElementById('callModal').style.right = `${callModalPosition}%`;
    // Изменить состояние окна на противоположное
    callModalClosed = !callModalClosed;
};
