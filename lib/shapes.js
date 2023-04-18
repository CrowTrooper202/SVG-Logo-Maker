class Shape {
    constructor(shpColor, txtColor, text) {
        this.shpColor = shpColor;
        this.txtColor = txtColor;
        this.text=text;
    }

    render() {
        return `<rect x="150" y="100" width="80" height="80" fill="${this.shpColor}" />`;
    }

    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>`;
    }

    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.render()}
  
  
  </svg>`;
    }
};

class Rect extends Shape {
    constructor(shpColor, fill) {
        super(shpColor, fill);
    }

    render() {
        return `<rect x="150" y="100" width="80" height="80" fill="${this.shpColor}" /> `;
    }

};

class Circle extends Shape {
    constructor(shpColor, txtColor) {
        super(shpColor, txtColor);
    }

    renderShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shpColor}" />`;
    }

    renderText() {
        
    }
};

class Triangle extends Shape {
    constructor(shpColor, txtColor) {
        super(shpColor, txtColor);
    }

    renderShape() {
        return `<polygon points="50,50 50,100 100,50" fill="${this.shpColor}" />`;
    }

    renderText() {
        
    }
};

module.exports = {Shape, Rect, Circle, Triangle };