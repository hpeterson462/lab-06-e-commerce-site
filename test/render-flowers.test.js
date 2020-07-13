// IMPORT MODULES under test here:
// import { example } from '../example.js';
import render-flowers from '../products/render-flowers.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const iris = {
        id: 'iris',
        name: 'Bearded Iris',
        image: 'iris.png',
        description: 'A rainbow of showy flowers.',
        category: 'spring',
        price: 2.00
    }
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
