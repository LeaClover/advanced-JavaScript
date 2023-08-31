// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const element = document.getElementById('super_link');
console.log(element);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardLinkElements = document.querySelectorAll('.card-link');
console.log(cardLinkElements);
cardLinkElements.forEach(item => {
    item.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const parent = document.querySelector('.card-body');
const childs = parent.querySelectorAll('.card-link')
console.log(childs);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const findAttr = document.querySelector('[data-number="50"]');
console.log(findAttr);

// 5. Выведите содержимое тега title в консоль.

const title = document.querySelector('title');
const textTitle = title.innerText;
console.log(textTitle);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitleEl = document.querySelector('.card-title');
console.log(cardTitleEl.parentElement);

// 7. Создайте тегp <p>, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const p = document.createElement('p');
p.innerText = 'Привет';
const cardEl = document.querySelector('.card');
const firstChild = cardEl.firstChild;
cardEl.insertBefore(p, firstChild);

// 8. Удалите тег h6 на странице.

// Первый вариант
const par = document.querySelector('.card-body');
const ch = document.querySelector('h6');
// const remove = par.removeChild(ch);

// Второй вариант
if (ch.parentNode) {
    ch.parentNode.removeChild(ch);
}
