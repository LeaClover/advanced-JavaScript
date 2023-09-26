async function fetchData() {
    try {
        const responce = await fetch('data.json');
        if (!responce.ok) {
            throw new Error('Не удалось получить данные с JSON');
        }
        const data = await responce.json();
        const itemBox = document.querySelector('.content__items-box');
        const dataPreviewEl = data.slice(0, 6);

        dataPreviewEl.forEach(({ image, name, text, price }) => {
            const itemBoxEl = `<article class="content__item">
            <img class="content__img" src="${image}" alt="${name}">
            <div class="content__info">
            <h5 class="content__item-heading">${name}</h5>
            <p class="content__item-text">${text}</p>
            <p class="content__item-price">$${price}</p>
            </div>
            </article>`;
            itemBox.insertAdjacentHTML('beforeend', itemBoxEl);
        });

        const btn = document.querySelector('.content__button');
        btn.addEventListener('click', () => {
            itemBox.innerHTML = '';

            data.forEach(({ image, name, text, price }) => {
                const itemBoxEl = `<article class="content__item">
                <img class="content__img" src="${image}" alt="${name}">
                <div class="content__info">
                <h5 class="content__item-heading">${name}</h5>
                <p class="content__item-text">${text}</p>
                <p class="content__item-price">$${price}</p>
                </div>
                </article>`;
                itemBox.insertAdjacentHTML('beforeend', itemBoxEl);
            });
            btn.style.display = "none";
            itemBox.style.paddingBottom = "30px";
        });

    } catch (error) {
        console.error(error);
    }
}

fetchData();