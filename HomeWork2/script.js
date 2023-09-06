// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropDown = document.querySelectorAll('.dropdown-item');
console.log(dropDown);
dropDown.forEach(item => {
    item.classList.add('super-dropdown');
});
console.log(dropDown);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btn = document.querySelector('.btn');
console.log(btn.classList);
btn.classList.toggle('btn-secondary');
console.log(btn.classList);

// Второй вариант
function classSwitcher(item) {
    if (item.classList.contains('btn-secondary')) {
        item.classList.remove('btn-secondary');
        console.log(item.classList);
    } else {
        item.classList.add('btn-secondary');
        console.log(item.classList);
    }
}
classSwitcher(btn);
classSwitcher(btn);
classSwitcher(btn);


// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuEl = document.querySelector('.menu');
console.log(menuEl.classList);
menuEl.classList.remove('dropdown-menu');
console.log(menuEl.classList);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку: `<a href="#">link</a>`

const dropdown = document.querySelector('div.dropdown');
dropdown.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const dropDownMB = document.querySelector('#dropdownMenuButton');
dropDownMB.setAttribute('id', 'superDropdown');

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const attEl = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
attEl.setAttribute('data-dd', '3');

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropDownT = document.querySelector('.dropdown-toggle');
dropDownT.removeAttribute('type');
