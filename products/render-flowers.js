import { getCart, findById } from '../common/utils.js';

function renderFlowers(flowers) {
    const liElement = document.createElement('li');
    liElement.className = flowers.category;
    liElement.title = flowers.description;

    const h3Element = document.createElement('h3');
    h3Element.textContent = flowers.name;
    liElement.appendChild(h3Element);

    const imgElement = document.createElement('img');
    imgElement.src = '../assets/' + flowers.image;
    imgElement.alt = flowers.name;
    liElement.appendChild(imgElement);

    const pElement = document.createElement('p');
    pElement.className = 'price';

    const labelElement = document.createElement('label');
    labelElement.for = 'quantity';
    labelElement.textContent = 'Quantity';

    const inputElement = document.createElement('input');
    inputElement.type = 'number';
    inputElement.id = 'quantity';
    inputElement.name = 'quantity';
    inputElement.min = 1;
    inputElement.max = 10;
    inputElement.append(labelElement);

    const usd = '$' + flowers.price.toFixed(2);
    pElement.textContent = usd;

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Add';
    buttonElement.value = flowers.id;
    buttonElement.addEventListener('click', () => {

        const userCart = getCart();
        const quantityInput = Number(inputElement.value);
        const flowersInCart = findById(userCart, flowers.id);

        if (flowersInCart) {
            flowersInCart.quantity = flowersInCart.quantity + quantityInput;
        } else {
            const newFlower = {
                id: flowers.id,
                quantity: quantityInput
            };
            userCart.push(newFlower);
        }
        const stringyCart = JSON.stringify(userCart);
        localStorage.setItem('CART', stringyCart);

        alert(`${flowers.name} has been added to your cart.`);
    });

    pElement.appendChild(buttonElement);

    inputElement.appendChild(labelElement);
    console.log(labelElement);
    liElement.appendChild(pElement);

    return liElement;

}

export default renderFlowers;