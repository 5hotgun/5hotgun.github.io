$(document).ready(function() {
    // Текущая позиция на странице
    let currentLocation;
    // Функция при скролле
    window.onscroll = function (e) {
        // Обновить текущую позицию
        currentLocation = window.pageYOffset;
    }

    // Триггер главного списка
    let menuTitle = document.getElementsByClassName('menulist-title');
    // Триггер списка с продуктами
    let menuGroupTitle = document.getElementsByClassName('product-category');
    // Кнопка скрытия всех контейнеров
    let closeBtn = document.getElementById('closeAllLists');

    // Найти позицию элемента
    const findElemPos = elem => {
        let curTop = 0;
        if (elem.offsetParent) {
            do {
                curTop += elem.offsetTop;
            } while (elem = elem.offsetParent);

            return curTop;
        }
    };

    // Скорлл к открытому главному контейнеру
    const scroll = elem => {
        let position = findElemPos(elem);
        if(currentLocation == undefined) currentLocation = window.pageYOffset;
        let i = currentLocation;
        let s = 10;
        if(currentLocation <= position) {
            const interval = setInterval(function() {
            	s += 0.2;
                window.scrollTo(0, i);
                i += s;
                if (i+100 >= position) {
                    clearInterval(interval);
                };
            }, 15);
        } else {
            const interval = setInterval(function() {
                console.log('e');
            	s += 0.2;
                window.scrollTo(0, i);
                i -= s;
                if (i+100 <= position) {
                    clearInterval(interval);
                };
            }, 15);
        }
    };


    // Получить параметры элемента
    const getElemParams = elem => {
        // Контейнер с группами
        let elemContainer = elem.nextSibling.nextSibling;
        // Высота контейнера с группами
        let elemContainerHeight = elemContainer.scrollHeight;
        // Родительский элемент - блок главного списка
        let elemParent = elem.parentElement;
        // Открыт ли блок списка
        let elemIsShown = elem.hasAttribute('data-shown') ? true : false;
        // Child элемента (стрелка или параграф)
        let elemChild = elem.lastChild.previousElementSibling;
        // Вернуть значения
        return {
            elemContainer,
            elemContainerHeight,
            elemParent,
            elemIsShown,
            elemChild
        };
    };
    // Функция смены аттрибутов (статуса контейнера открыт/закрыт), смены отображения статуса контейнера
    const changeAttribute = (param, elem, child) => {
        // Тип дочернего элемента (изображение или параграф)
        let childType = child.nodeName;
        // В зависимости от параметра добавить / удалить аттрибут
        switch (param) {
            case 'remove':
                // Удалить аттрибут, означающий открытый контейнер
                elem.removeAttribute('data-shown');
                // Если дочерний элемент - параграф, сменить - на +
                if(childType === 'P') child.setAttribute('data-icon', '\u002B');
                // Если дочерний элемент - изображение, вернуть в изначальное положение
                if(childType === 'IMG') child.classList.remove('turned');
                break;
            case 'set':
                // Установить аттрибут, означающий открытый контейнер
                elem.setAttribute('data-shown', 'true');
                // Если дочерний элемент - параграф, сменить + на -
                if(childType === 'P') child.setAttribute('data-icon', '\u002D');
                // Если дочерний элемент - изображение, перевернуть
                if(childType === 'IMG') child.classList.add('turned');
                break;
            default:
                console.log('Switch default');
        }
    };

    // Функция открытия / закрытия контейнера
    const toggleElement = (list, elem, height) => {
        // Получить параметры элемента
        let { elemContainer, elemContainerHeight, elemParent, elemIsShown, elemChild } = getElemParams(elem);
        // Выбрать значение высоты контейнера в зависимости от его состояния (открыт, закрыт)
        let elemParentHeight = elemIsShown ? height : elemContainerHeight + height;
        // Установить высоту контейнера
        elemParent.style.maxHeight = `${elemParentHeight}px`;
        // Если изменяется внутренний список продуктов
        if(list === 'group') {
            // Главный контейнер
            let mainList = elemParent.parentElement.parentElement;
            // Текущая высота главного контейнер + высота внутреннего контейнера с продуктами
            let mainListHeight = mainList.scrollHeight + elemParent.scrollHeight;
            // Установить значение высоты главного контейнера
            mainList.style.maxHeight = `${mainListHeight}px`;
        }
        // Если контейнер открыт
        if(elemIsShown) {
            // Удалить аттрибуты
            changeAttribute('remove', elem, elemChild);
        } else {
            // Установить аттрибуты
            changeAttribute('set', elem, elemChild);
            if(list === 'main') scroll(elemParent);
        }
    };

    // !!! Начало функций - клик по триггеру главнго контейнера
    // Цикл по массиву с триггерами главных контейнеров
    Array.from(menuTitle).forEach(elem => {
        // Событие клик по триггеру главного контейнера
        elem.addEventListener('click', () => {
            // При открытии главного списка показать кнопку закрытия всех списков
            // closeBtn.style.display = 'block';
            // Открыть / закрыть главный контейнер
            toggleElement('main', elem, 80);
        });
    });

    // !!! Начало функци - клик по триггеру внутреннего контейнера
    // Цикл по массиву с триггерами внутренних контейнеров
    Array.from(menuGroupTitle).forEach(elem => {
        // Событие клик по триггеру внутреннего контейнера
        elem.addEventListener('click', () => {
            // Открыть / закрыть внутренний контейнер
            toggleElement('group', elem, 35);
        });
    });

    const hideElement = (elem, height, elemChild) => {
        // Установить высоту родительского элемента
        elem.parentElement.style.maxHeight = height;
        // Удалить аттрибут, означающий открытый контейнер
        elem.removeAttribute('data-shown');
        // Тип дочернего элемента (изображение или параграф)
        let childType = elemChild.nodeName;
        // Если дочерний элемент - параграф, сменить - на +
        if(childType === 'P') elemChild.setAttribute('data-icon', '\u002B');
        // Если дочерний элемент - изображение, вернуть в изначальное положение
        if(childType === 'IMG') elemChild.classList.remove('turned');
    };


    // // Добавить событие клик на кнопку
    // closeBtn.addEventListener('click', () => {
    //     // Цикл по массиву главных контейнеров
    //     Array.from(menuTitle).forEach(elem => {
    //         // Найти дочерний элемент (изображение - стрелка)
    //         let elemChild = elem.lastChild.previousElementSibling;
    //         // Скрыть все главные контейнеры
    //         hideElement(elem, '80px', elemChild);
    //     });
    //     // Цикл по массиву внутренних контейнеров
    //     Array.from(menuGroupTitle).forEach(elem => {
    //         // Найти дочерний элемент (параграф)
    //         let elemChild = elem.lastChild.previousElementSibling;
    //         // Скрыть все внутренние контейнеры
    //         hideElement(elem, '35px', elemChild);
    //     });
    //     // Скрыть кнопку закрытия всех контейнеров
    //     closeBtn.style.display = 'none';
    //
    // });
});
