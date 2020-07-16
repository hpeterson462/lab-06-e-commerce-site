import flowers from '../data/flowers.js';
import {
    findById,
    calcOrderTotal,
    toUSD,
    getCart,
    orderConfirmation
} from '../common/utils.js';
import renderCartItem from './render-line-item.js';

const userCart = getCart();

const tbodyEl = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < userCart.length; i++) {
    const cartFlower = userCart[i];
    const flowerProduct = findById(flowers, cartFlower.id);
    const dom = renderCartItem(cartFlower, flowerProduct);

    tbodyEl.append(dom);
}

const totalOrder = calcOrderTotal(userCart, flowers);
orderTotalCell.textContent = toUSD(totalOrder);

//place order
const placeOrderButton = document.getElementById('place-order-button');

if (userCart.length === 0) {
    placeOrderButton.disabled = true;
} else {
    placeOrderButton.addEventListener('click', () => {
        alert(`Order Confirmation: ${orderConfirmation()}`);
        localStorage.removeItem('CART');
        alert('Thank you for purchasing!');
        window.location = '../products';
    });
}
