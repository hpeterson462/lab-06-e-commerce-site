import flowers from '../data/flowers.js';

export function findById(flowerArray, cartItem) {
    let matchItem;
    for (let i = 0; i < flowerArray.length; i++) {
        if (cartItem === flowerArray[i].id) {
            matchItem = flowerArray[i];
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

export function calcOrderTotal(cart, flowers) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const cartItem = cart[i];
        const flower = findById(flowers, cartItem.id);
        const purchaseTotal = calcLineItem(cartItem.quantity, flower.price);
        orderTotal += purchaseTotal;
    }
    return roundCurrency(orderTotal);
}

//shopping cart - if empty, initialize empty cart
export function getCart() {
    const emptyCart = '[]';
    const rawCart = localStorage.getItem('CART') || emptyCart;
    let cart = JSON.parse(rawCart);

    return cart;
}

//order confirmation
export function orderConfirmation() {
    const cartOrder = getCart();
    let confirmOrder = [];
    for (let i = 0; i < cartOrder.length; i++) {
        const cartItem = cartOrder[i];
        const orderedItem = findById(flowers, cartItem.id);
        const newOrder = (`${cartItem.quantity} ${orderedItem.id}`);
        confirmOrder.push(newOrder);
    }
    return confirmOrder;
}