// Задание 1
// 1. В html создать кнопку button
// 2. После загрузки страницы вывести в консоль текст “страница загрузилась”
// 3. Добавить событие onclick которое выводит в консоль текст “событие onclick”
// 4. Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

document.querySelector('#myButton').onclick = function () {
    console.log('событие onclick');
}

window.onload = function () {
    console.log("Страница прогрузилась");
}

window.addEventListener('load', () => {
    console.log("событие addEventListener");
});


// Задание 2
// 1. Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// 2. Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// 3. Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// 4. Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

const btns = document.querySelectorAll('.button');

// Первый вариант
// for(const button of btns) {
//     button.onclick = function () {
//         console.log(`Нажата ${button.textContent} кнопка`);
//     }
// }

// Второй вариант
btns.forEach((btn) => {
    btn.onclick = function () {
        console.log(`Нажата ${btn.textContent} кнопка`);
    }
});

// document.querySelector('#button5').addEventListener('click', function () {
//     this.textContent = 'Вы нажали на эту кнопку';
//     this.style.color = 'white';
//     this.style.backgroundColor = 'black';
// })

// Бегающая кнопка

document.querySelector('#button5').addEventListener('mouseover', function () {
    this.innerText = "Не догонешь!))";
    this.style.backgroundColor = 'red';
    this.style.transition = `all 1s ease-in-out`;
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    this.style.transform = `translate(${x}px, ${y}px)`;
    // кнопка становится некликабедьной, работает только с 'click'
    this.disabled = 'true';
});

// Задание 3
// 1. Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// 2. Создать вторую кнопку, которая будет удалять созданный заголовок h1
// 3. Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

const buttonsData = [
    { id: "add", text: "Добавить заголовок", clickHandler: addHeading },
    { id: "remove", text: "Удалить заголовок", clickHandler: removeHeading },
    {
        id: "hover",
        text: "Кнопка с наведением",
        mouseoverHandler: handleHoverIn,
        mouseoutHandler: handleHoverOut,
    },
];

function addHeading() {
    const heading = document.createElement('h1');
    heading.textContent = "Новый заголовок";
    document.body.appendChild(heading);
}

function removeHeading() {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.remove();
    }
}

function handleHoverIn() {
    console.log("Вы навели на данную кнопку");
}

function handleHoverOut() {
    console.log("Вы убрали курсор с кнопки");
}

function createButtons() {
    const btnConteiner = document.querySelector('.buttons');

    buttonsData.forEach((el) => {
        const btn = document.createElement('button');
        btn.id = el.id;
        btn.textContent = el.text;
        btnConteiner.appendChild(btn);

        if (el.clickHandler) {
            btn.onclick = el.clickHandler;
        }

        if (el.mouseoverHandler) {
            btn.onmouseover = el.mouseoverHandler;
        }

        if (el.mouseoutHandler) {
            btn.onmouseout = el.mouseoutHandler;
        }
    })
}

createButtons();

// Задание 4
// 1. Создать в html список состоящий из 3-х произвольных элементов li
// 2. Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// 3. Создать кнопку, которая будет удалять первый элемент из созданного списка
// 4. Создать кнопку, при клике на которую ей добавляется класс “click”

document.querySelector('#addEl').addEventListener('click', addListItem);

document.querySelector('#removeEl').addEventListener('click', removeFirstListItem);

document.querySelector('#addClass').addEventListener('click', addClickClass);

function addListItem() {
    const list = document.querySelector('#list');
    const newItem = document.createElement('li');
    newItem.textContent = "Новый элемент";
    list.appendChild(newItem);
}

function removeFirstListItem() {
    const list = document.querySelector('#list');
    if (list.firstElementChild) {
        list.firstElementChild.remove();
    }
}

function addClickClass() {
    this.classList.add('click');
}
