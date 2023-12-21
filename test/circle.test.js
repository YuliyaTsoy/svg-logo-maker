// Constructor Circle is imported.
const Circle = require('../lib/Circle');

// A testing suite for Circle is created.
describe('Circle', () => {
    // test is created to check that a circle logo is created based on user inputs of shape color, text and text color
    it('should return a circle logo based on user inputs of shape color, text and text color', () => {
        const circle = new Circle('green','ASD','yellow');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="blue" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">EKO</text>
        </svg>
        `
        );
    });
});