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
    const rawCart = localStorage.getItem('CART');
    let cart = JSON.parse(rawCart);

    if (!cart) {
        cart = [];
    }
    return cart;
}