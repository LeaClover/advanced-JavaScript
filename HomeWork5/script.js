// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

import { jokes } from "./data.js";

const data = JSON.parse(jokes);

const content = document.querySelector('.content');
content.style.display = 'flex';
content.style.gap = '10px';
content.style.flexWrap = 'wrap';
content.style.justifyContent = 'center';
content.style.background = '#f5f5f5';
// content.style.margin = '0 auto';

data.forEach(({ id, type, setup, punchline, img }) => {
    const div = document.createElement('div');
    div.classList.add('block');
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.flexDirection = 'column';
    div.style.flexWrap = 'wrap';
    div.style.marginLeft = '5px';
    div.style.width = '40%';
    div.style.gap = '1px';
    div.style.border = '5px solid orange';
    div.style.background = '#ccc';
    div.style.marginTop = '0px';
    content.appendChild(div);

    const imgimg = document.createElement('img');
    imgimg.classList.add('img-block');
    imgimg.src = img;
    imgimg.style.width = '200px';
    imgimg.style.marginTop = '10px';
    imgimg.style.alignSelf = 'center';
    imgimg.style.border = '3px solid black';
    div.appendChild(imgimg);

    const h1 = document.createElement('h1');
    h1.classList.add('block__header');
    h1.textContent = `type of joke: ${type}`;
    h1.style.background = 'orange';
    h1.style.color = 'blue';
    h1.style.padding = '2px 15px 5px';
    h1.style.width = '50%';
    h1.style.border = '5px solid black';
    h1.style.borderLeft = 'none';
    div.appendChild(h1);

    const textID = document.createElement('p');
    textID.classList.add('block-text');
    textID.textContent = `id: ${id}`;
    textID.style.color = 'grey';
    textID.style.paddingLeft = '20px';
    div.appendChild(textID);

    const setupBlock = document.createElement('h4');
    setupBlock.classList.add('block__setup');
    setupBlock.textContent = `- ${setup}`;
    setupBlock.style.padding = '0px 20px';
    setupBlock.style.height = '20px';
    div.appendChild(setupBlock);

    const punchlineBlock = document.createElement('h4');
    punchlineBlock.classList.add('block__punchline');
    punchlineBlock.textContent = `- ${punchline}`;
    punchlineBlock.style.padding = '0px 20px';
    punchlineBlock.style.height = '50px';
    div.appendChild(punchlineBlock);
});
