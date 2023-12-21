const Circle = require('./Circle.js');
const Square = require('./Square.js');
const Triangle = require('./Triangle.js');

// creates new instances of shape class based on inputs from user
function makeShape(response) {

    if (response.shape === 'Circle') {
        let shapeChoice = new Circle (response.shapeColor, response.text, response.textColor)
        return shapeChoice.render()
    }

    if (response.shape === 'Square') {
        let shapeChoice = new Square (response.shapeColor, response.text, response.textColor)
        return shapeChoice.render()
    }

    if (response.shape === 'Triangle') {
        let shapeChoice = new Triangle (response.shapeColor, response.text, response.textColor)
        return shapeChoice.render()
    }
};

module.exports = makeShape;