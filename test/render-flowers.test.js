// IMPORT MODULES under test here:
// import { example } from '../example.js';
import renderFlowers from '../products/render-flowers.js';

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
    };
    const expected = '<li class="spring" title="A rainbow of showy flowers."><h3>Bearded Iris</h3><img src="../assets/iris.png" alt="Bearded Iris"><p class="price">$2.00<button value="iris">Add</button></p></li>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderFlowers(iris);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});
