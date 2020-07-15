import { toUSD } from '../common/utils.js';

function renderCartItem(cartItem, flower) {
    const trEl = document.createElement('tr');

    const cellName = document.createElement('td');
    cellName.className = 'align-left';
    cellName.textContent = flower.name;
    trEl.append(cellName);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = cartItem.quantity;
    trEl.append(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(flower.price);
    trEl.append(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = cartItem.quantity * flower.price;
    totalCell.textContent = toUSD(total);
    trEl.append(totalCell);

    return trEl;
}

export default renderCartItem;