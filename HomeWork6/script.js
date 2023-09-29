async function fetchData() {
    try {
        const responce = await fetch('data.json');
        if (!responce.ok) {
            throw new Error('Не удалось получить данные с JSON');
        }
        const data = await responce.json();
        const itemBox = document.querySelector('.content__items-box');
        const dataPreviewEl = data.slice(0, 6);
        const dataAfterPreview = data.slice(6);

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


            dataAfterPreview.forEach(({ image, name, text, price }) => {
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

        itemBox.addEventListener('click', (e) => {
            const cartBox = document.querySelector('.cart__left-block');
            const value = e.target.getAttribute('src');

            if (document.querySelectorAll('.cart__product').length === 0) {
                const cartCenter = document.querySelector('.cart');
                const divHeaderCart = document.createElement('h3');
                divHeaderCart.classList.add('cart__header');
                divHeaderCart.innerText = "Cart Items";
                cartBox.appendChild(divHeaderCart);
                cartCenter.style.paddingTop = "96px";
                cartBox.style.marginBottom = "96px";
            }
            data.forEach(({ name, image, price, color, size, quantity }) => {
                if (value === image) {
                    const productEl = `<div class="cart__product">
                            <button class="cart__x-icon"></button>
                            <img src="${image}" alt="${name}">
                            <div class="cart__text-block">
                                <h2 class="cart__cart-heading">${name}</h2>
                                <div class="cart__info-block">
                                    <p class="cart_price-block">Price: <span class="cart__price">$${price}</span></p>
                                    <p class="cart__color-block">Color: ${color}</p>
                                    <p class="cart__size-block">Size: ${size}</p>
                                    <div class="cart__quantity-block">
                                        <label class="cart__quantity__label">Quantity:</label>
                                        <input type="text" class="cart__quantity__input" value="${quantity}">
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>`;
                    cartBox.insertAdjacentHTML('beforeend', productEl);
                }
            });

            const btns = document.querySelectorAll('.cart__x-icon');
            console.log(btns);
            btns.forEach((el) => {
                el.addEventListener('click', () => {
                    const product = el.closest('.cart__product');
                    product.remove();
                    if (document.querySelectorAll('.cart__product').length === 0) {
                        const cartCenter = document.querySelector('.cart');
                        cartCenter.style.paddingTop = "0px";
                        cartBox.style.marginBottom = "0px";
                        cartBox.remove('h3');
                    }
                });
            });
        });

    } catch (error) {
        console.error(error);
    }
}

fetchData();