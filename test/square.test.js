// Constructor Square is imported.
const Square = require('../lib/Square');

// A testing suite for Square is created.
describe('Square', () => {
    // test is created to check that a square logo is created based on user inputs of shape color, text and text color
    it('should return a square logo based on user inputs of shape color, text and text color', () => {
        const square = new Square('green','ASD','yellow');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="red"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="yellow">EKO</text>
        </svg>
        `
        );
    });
});