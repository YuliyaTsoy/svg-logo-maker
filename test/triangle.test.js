// Constructor Triangle is imported.
const Triangle = require('../lib/Triangle');

// A testing suite for Triangle is created.
describe('Triangle', () => {
    // test is created to check that a triangle logo is created based on user inputs of shape color, text and text color
    it('should return a triangle logo based on user inputs of shape color, text and text color', () => {
        const triangle = new Triangle('green','ASD','yellow');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="lime"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="aliceblue">EKO</text>
        </svg>
        `
        );
    });
});