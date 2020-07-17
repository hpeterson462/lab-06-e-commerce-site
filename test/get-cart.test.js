import { getCart } from '../common/utils.js';

const test = QUnit.test;

test('add product to cart', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testCart = [
        {
            id: 'iris',
            quantity: 2
        },
        {
            id: 'rose',
            quantity: 3
        },
    ];

    const stringifyTestCart = JSON.stringify(testCart);
    localStorage.setItem('CART', stringifyTestCart);

    //Act 
    // Call the function you're testing and set the result to a const
    const cart = getCart();
    const expected = testCart;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(cart, expected);
});