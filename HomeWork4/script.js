// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputFrom = document.querySelector('input[id="from"]');
const spanP = document.querySelector('span');

inputFrom.addEventListener('input', (e) => {
    const p = document.createElement('p');
    p.innerText = e.target.value;
    spanP.appendChild(p);
    if (spanP.children.length > 1) {
        spanP.removeChild(spanP.firstChild);
    }
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btnM = document.querySelector('.messageBtn');
const msg = document.querySelector('.message');

btnM.addEventListener('click', () => {
    if (msg.classList.contains('animate_animated') && msg.classList.contains('animate_fadeInLeftBig')) {
        msg.classList.remove('animate_animated', 'animate_fadeInLeftBig');
        msg.removeAttribute('visibility');
    } else {
        msg.classList.add('animate_animated', 'animate_fadeInLeftBig');
        msg.setAttribute('visibility', 'visible');
    }
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector('form');
const inputForm = form.querySelector('input');
const inputSelector = form.querySelector('select');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (inputForm.value.length === 0) {
        inputForm.style.border = "3px solid red";
        inputForm.classList.add('error');
        inputForm.setCustomValidity('Пустое поле');
        inputForm.reportValidity();
    } else {
        inputForm.style.border = "3px solid green";
        inputForm.classList.remove('error');
    }
    if (inputSelector.selectedIndex !== 0) {
        inputSelector.style.border = "3px solid green";
        inputSelector.classList.remove('error');
    } else {
        inputSelector.style.border = "3px solid red";
        inputSelector.classList.add('error');
        inputSelector.setCustomValidity('Выберите значение');
        inputSelector.reportValidity();
    }
    inputForm.reportValidity();
    inputSelector.reportValidity();
});

inputForm.addEventListener('input', () => {
    inputForm.setCustomValidity('');
});

inputSelector.addEventListener('input', () => {
    inputSelector.setCustomValidity('');
});

inputForm.addEventListener('input', (e) => {
    let inputText = e.target.value;
    if (inputText !== '') {
        inputForm.style.border = "3px solid green";
        inputForm.classList.remove('error');
    } else {
        inputForm.style.border = "3px solid red";
        inputForm.classList.add('error');
    }
})

inputSelector.addEventListener('input', (e) => {
    if (e.target.selectedIndex !== 0) {
        inputSelector.style.border = "3px solid green";
        inputSelector.classList.remove('error');
    } else {
        inputSelector.style.border = "3px solid red";
        inputSelector.classList.add('error');
    }
})
