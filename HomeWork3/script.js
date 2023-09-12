﻿// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

function loadDOM() {
    console.log('Все теги прогрузились!');
}

document.addEventListener('DOMContentLoaded', loadDOM);

document.addEventListener("DOMContentLoaded", () => {
    console.log("Все теги прогрузились!2");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.onload = function () {
    console.log('Страница загружена');
};

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element" у элемента, а также выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener('click', event => {
    if (event.target.classList.contains('super_element')) {
        console.log(`Класс "super_element" присутствует в элементе ${event.target.tagName.toLowerCase()}`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе ${event.target.tagName.toLowerCase()}`);
    }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textarea = document.querySelector('textarea');

textarea.addEventListener('mouseover', () => {
    console.log("Вы навели на textarea.");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulEl = document.querySelector('ul');

ulEl.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        console.log(`${event.target.textContent}`);
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// В 5м задании мы указываем конкретный тег в документе, к которому надо обратиться, а в 3м - мы обращаемся ко всему документу. Следовательно время на обработку события тратиться меньше.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liEls = document.querySelectorAll('li');

for (let i = 1; i <= liEls.length; i++) {
    if (i % 2 === 0) {
        liEls[i - 1].style.backgroundColor = 'yellow';
    }
}

// Второй вариант

// const liEls2 = document.querySelectorAll('li:nth-child(2n)');
// liEls2.forEach(el => el.style.backgroundColor = 'orange');
