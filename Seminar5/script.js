// Задание 1
// 1. Поиск в интернете (бесплатные api примеры)
// 2. Найти любые данные, на произвольную тему
// 3. Установить расширение в браузер “JSON viewer”
// 4. Пример найденного json объекта

// Задание 2
// 1. Создать файл data.js
// 2. Создать переменную dataInfo
// 3. Добавить несколько данных в dataInfo

// Задание 3
// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из
// файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

// Задание 4 (тайминг 20 минут)
// 1. Создать все необходимые заголовки, параграфы изображения (из данных json)
// 2. Добавить все содержимое в блок контент
// 3. Добавить стили при необходимости

// Пример использования e.stopPropagation()

const outerDiv = document.querySelector('.outer');
const innerDiv = document.querySelector('.inner');
const button1 = document.querySelector('#myButton1');
const button2 = document.querySelector('#myButton2');

outerDiv.addEventListener('click', (e) => {
    console.log('Внешний Div');
});

innerDiv.addEventListener('click', (e) => {
    console.log('Внутренний Div');
});

button1.addEventListener('click', (e) => {
    console.log('Кнопка 1');
});

button2.addEventListener('click', (e) => {
    console.log('Кнопка 2');
    e.stopPropagation();
});

// Основные задания
import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);
const content = document.querySelector('.content');

// data.forEach(el => {
//     const img = document.createElement('img');
//     img.src = el.url;
//     document.querySelector('.content').appendChild(img);
// });

data.forEach(({ id, name, age, url }) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.style.display = 'inline-block';
    div.style.marginRight = '10px';
    content.appendChild(div);

    const img = document.createElement('img');
    img.classList.add('card-top');
    img.src = url;
    img.width = 300;
    div.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    div.appendChild(cardBody);

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = `id: ${id}`;
    cardBody.appendChild(text);

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = name;
    cardBody.appendChild(title);

    const subtitle = document.createElement('h6');
    subtitle.classList.add('card-title');
    subtitle.textContent = age;
    cardBody.appendChild(subtitle);
});
