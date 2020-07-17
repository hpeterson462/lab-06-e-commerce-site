//import { getCart, findById } from '../common/utils.js';

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

    const usd = '$' + flowers.price.toFixed(2);
    pElement.textContent = usd;

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Add';
    buttonElement.value = flowers.id;
    /*buttonElement.addEventLister('click', () => {
    const cart = getCart();

    const flowersInCart = findById(cart, flowers.id);

    if (flowersInCart) {
        flowersInCart.quantity++;
    } else {
        const newFlower = {
            id: flowers.id,
            quantity: 1
        };
        cart.push(newFlower);
    }
    const stringyCart = JSON.stringify('cart');
    localStorage.setItem('cart', stringyCart);
});*/

    pElement.appendChild(buttonElement);

    liElement.appendChild(pElement);

    return liElement;
}

export default renderFlowers;