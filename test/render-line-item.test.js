// IMPORT MODULES under test here:
// import { example } from '../example.js';
import flowers from '../data/flowers.js';
import { findById } from '../common/utils.js';
import renderCartItem from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

test('renders a cart item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem = {
        id: 'iris',
        quantity: 5
    };

    const iris = findById(flowers, cartItem.id);
    const expected = '<tr><td class="align-left">Bearded Iris</td><td>5</td><td>$2.00</td><td class="line-item-total">$10.00</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderCartItem(cartItem, iris);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});