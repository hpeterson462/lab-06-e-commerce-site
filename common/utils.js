export function findById(productItem, cartItem) {
    let matchItem;
    for (let i = 0; i < productItem.length; i++) {
        if (cartItem === productItem[i].id) {
            matchItem = productItem[i];
            return matchItem;
        }
    }
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

function roundCurrency(itemTotal) {
    return Math.round(itemTotal * 100) / 100;
}

export function calcLineItem(quantity, price) {
    const itemTotal = quantity * price;
    return roundCurrency(itemTotal);
}

