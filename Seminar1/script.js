// Задание 1
// 1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Первый способ:
const div1 = document.querySelector('div p:first-child');
console.log(div1);
// Второй способ:
const div2 = document.querySelector('div');
console.log(div2.firstElementChild);
// Третий способо
const div3 = document.querySelectorAll('p');
console.log(div3[0]);

// 2. Получите ссылку на первый абзац с классом www. и вывести его в консоль
const p = document.querySelectorAll('.www');
console.log(p[0]);

// Задание 2
// 1. Дан тег <a class="link" href="#">link text html</a>
// a) Вам необходимо поменять текст внутри ссылки на “link text js”
const link = document.querySelector('a');
link.innerText = 'link text js';

// b) Заменить href, на значение https://developer.mozilla.org/ru/
// Первый способ (если есть атрибут, например href)
link.href = 'https://developer.mozilla.org/ru/ ';
console.log(link.href);
// Второй способ (если атрибута нет)
// link.setAttribute('href', 'https://developer.mozilla.org/ru/')

// 2. Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
const img = document.querySelector('img');
img.src = 'https://cdnn1.ukraina.ru/img/07e6/0c/02/1041436899_0:206:2905:1840_1920x0_80_0_0_676d15c7dd4e1631648f7eee00d87561.jpg.webp';
img.width = '200';

// Задание 3
// 1. Дан тег <div class="content"></div>
// 2. Создайте новый элемент p
// 3. Добавьте в него текст “Новый текстовый элемент”
// 4. Добавьте созданный элемент внутри <div class="content"></div>
// 5. Удалите добавленный узел 

const divdiv = document.querySelector('.content');
const pp = document.createElement('p');
divdiv.appendChild(pp);

// только текст
pp.innerText = 'Новый текстовый элемент';
// текст и элементы html
// pp.innerHTML = '<span>Новый текст</span>';
divdiv.removeChild(pp);

// Задание 4
// 1. Создать элемент button, добавить в блок <div class="content"></div>
// 2. При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const button1 = document.createElement('button');
divdiv.appendChild(button1);
const buttonFirst = document.querySelector('button');
buttonFirst.textContent = 'Нажми меня';
let count = 0;

buttonFirst.onclick = function () {
    count++;
    buttonFirst.textContent = count + ' раз нажали на кнопку';
};

// Задание 5
// 1. Дан тег <div class="content"></div> 
// 2. Создайте с помощью javascript новый элемент button
// 3. Добавьте текст для кнопки “Отправить”
// 4. При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const button2 = document.createElement('button');
divdiv.appendChild(button2);
button2.setAttribute('class', 'button');
button2.textContent = 'Отправить';
const buttonSend = document.querySelector('.button');

buttonSend.onclick = function () {
    buttonSend.textContent = 'Текст отправлен';
    setTimeout(() => {
        button2.textContent = 'Отправить';
    }, 5000);
};
