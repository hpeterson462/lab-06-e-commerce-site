import cart from '../data/cart.js';
import flowers from '../data/flowers.js';
import { findById, calcOrderTotal, toUSD, getCart } from '../common/utils.js';
import renderCartItem from './render-line-item.js';

const userCart = getCart();

const tbodyEl = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const flower = findById(flowers, cartItem.id);
    const dom = renderCartItem(cartItem, flower);

    tbodyEl.append(dom);
}

const totalOrder = calcOrderTotal(userCart, flowers);
orderTotalCell.textContent = toUSD(totalOrder);