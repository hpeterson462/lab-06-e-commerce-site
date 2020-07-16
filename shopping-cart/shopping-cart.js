import flowers from '../data/flowers.js';
import { findById, calcOrderTotal, toUSD, getCart } from '../common/utils.js';
import renderCartItem from './render-line-item.js';

const userCart = getCart();
let cart = 0;

const tbodyEl = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const cartFlower = cart[i];
    const flowerProduct = findById(flowers, cartFlower.id);
    const dom = renderCartItem(cartFlower, flowerProduct);

    tbodyEl.append(dom);
}

const totalOrder = calcOrderTotal(userCart, flowers);
orderTotalCell.textContent = toUSD(totalOrder);

//place order
const placeOrderButton = document.getElementById('place-order-button');

if (cart.length === 0) {
    placeOrderButton.disabled = true;
} else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}
