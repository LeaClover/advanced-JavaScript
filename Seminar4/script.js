// Задание 1
// 1. В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// 2. Добавить кнопку отправить
// 3. При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// 4. Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

const checkbox = document.querySelector("#agree");
const submitBtn = document.querySelector("#submit");
const body = document.querySelector("body");

submitBtn.addEventListener("click", function () {
    const div = document.createElement("div");
    if (checkbox.checked) {
        div.textContent = "Согласие получено!";
        div.style.color = "green";
    } else {
        div.textContent = "Необходимо согласие!";
        div.style.color = "red";
    }
    body.appendChild(div);
});

// Задание 2
// 1. В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// 2. Кнопка отправить
// 3. Если выбран чай, необходимо вывести сообщение “Чай закончился”
// 4. Если выбран кофе, необходимо вывести соообщение “кофе закончился”

const teaBtn = document.querySelector('input[value="tea"]');
const coffeeBtn = document.querySelector('input[value="coffee"]');
const submitBtn2 = document.querySelector("#submit2");

submitBtn2.addEventListener("click", function () {
    if (teaBtn.checked) {
        alert('Чай закончился');
    } else if (coffeeBtn.checked) {
        alert('Кофе закончился');
    }
});

// Задание 3
// 1. Создать поле ввода (пароль)
// 2. Кнопка отправить
// 3. Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// 4. Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

const passwordField = document.querySelector('#password-field');
const submitButton = document.querySelector('#submit3');
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (passwordField.value === 'пароль') {
        passwordField.style.borderColor = 'green';
        passwordField.style.borderWidth = '3px';
    } else {
        passwordField.style.borderColor = 'red';
        passwordField.style.borderWidth = '3px';
        passwordField.setCustomValidity('Пароль неверный');
    }
    // Для проверки валидности, обратная связь от браузера, сообщение об ошибке
    passwordField.reportValidity();
});

passwordField.addEventListener('input', () => {
    passwordField.setCustomValidity('');
})

// Задание 4
// 1. Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// 2. При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода