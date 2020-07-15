import cart from '../data/cart.js';
import flowers from '../data/flowers.js';
import { findById, calcOrderTotal, toUSD } from '../common/utilis-.js';
import renderCartItem from './render-line-item.js';

const tbodyEl = document.getElementById('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const flower = findById(flowers, cartItem.id);
    const dom = renderCartItem(cartItem, flower);

    tbodyEl.append(dom);
}

const totalOrder = calcOrderTotal(cart, flowers);
orderTotalCell.textContent = toUSD(totalOrder);