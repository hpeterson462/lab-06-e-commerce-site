// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById, calcLineItem } from '../common/utils.js';
import cart from '../data/cart.js';
import flowers from '../data/flowers.js';

const test = QUnit.test;

//findByID()
test('find product item by id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const id = 'iris';
    const expected = 'Bearded Iris';

    //Act 
    // Call the function you're testing and set the result to a const
    const foundFlower = findById(flowers, id);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.ok(foundFlower);
    expect.equal(foundFlower.name, expected);

});

test('if find product item by id returns null, not found', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const id = 'not found';
    const expected = null;

    //Act 
    // Call the function you're testing and set the result to a const
    const foundFlower = findById(flowers, id);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(foundFlower, expected);

});


//calcLineItem()
test('calc item price', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const quantity = 4;
    const price = 2;
    const expected = 8;

    //Act 
    // Call the function you're testing and set the result to a const
    const total = calcLineItem(quantity, price);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(total, expected);

});