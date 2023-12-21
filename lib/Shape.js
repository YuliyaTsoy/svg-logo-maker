// Shape is a parent class that will be extended by its children classes Triangle, Circle, Square
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
};

module.exports = Shape;