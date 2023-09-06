// Задание 1
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// - Цвет текста синий
// - Рамка сплошная черная
// - Цвет фона #f8f8f8
// - Внутренний отступ 16px
// - Добавить данному блоку класс item_1 (использовать setAttribute)

const blockEl = document.querySelector('.block');
const itemDiv = document.createElement('div');
itemDiv.classList.add('item');
itemDiv.textContent = 'Элемент внутри';
blockEl.appendChild(itemDiv);

itemDiv.style.color = 'blue';
itemDiv.style.border = '3px solid black';
itemDiv.style.backgroundColor = '#f8f8f8';
itemDiv.style.padding = '16px';
itemDiv.setAttribute('class', 'item_1');

// Задание 2
// 1. Необходимо с помощью querySelector найти параграф с классом text
// 2. Вывести в консоль соседний элемент h2
// 3. Вывести в консоль родительский элемент content
// 4. Вывести в консоль картинку
// 5. Вывести в консоль родительский элемент elem

const textEl = document.querySelector('.text');
console.log(textEl);
console.log(textEl.previousElementSibling);
console.log(textEl.parentElement);
const img = document.querySelector('img');
console.log(img);
const elem = document.querySelector('.elem');
console.log(elem.parentElement);

// Задание 3
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

const h2Element = document.querySelector('.subtitle');
const parents = [];

let parent = h2Element.parentNode;

while (parent !== null) {
    parents.push(parent);
    parent = parent.parentNode;
}

console.log(parents);

// Задание 4
// 1. Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// 2. Цвет у рамки сделать красным

const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');

// Вывод в консоль значения, вводимое пользователем в строку запроса
// input.addEventListener('input', (event) => {
//     const value = event.target.value;
//     console.log(value);
// });

// Вывод в консоль типа события и фрагмент кода, в котором происходит событие
// form.addEventListener('submit', (event) => {
//     console.log(event.type);
//     console.log(event.target);
// });

form.addEventListener('submit', (event) => {
    // Ограничения вывода по умолчанию??? 
    event.preventDefault();
    const errorMSG = document.createElement('h2');
    if (input.value === '') {
        errorMSG.textContent = 'Вы ничего не ввели!';
        errorMSG.style.border = '2px solid red';
    } else {
        errorMSG.textContent = 'Успешно!';
        errorMSG.style.border = '2px solid green';
    }
    form.appendChild(errorMSG);
    setTimeout(() => {
        errorMSG.remove();
    }, 1000);
});
