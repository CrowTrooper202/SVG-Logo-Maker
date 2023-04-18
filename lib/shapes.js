class Shape {
    constructor(shpColor, txtColor, text) {
        this.shpColor = shpColor;
        this.txtColor = txtColor;
        this.text=text;
    }

    renderShape() {
        return `<rect x="150" y="100" width="80" height="80" fill="${this.shpColor}" />`;
    }

    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text>`;
    }

    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.renderShape()}
  
    ${this.renderText()}
  
  </svg>`;
    }
};

class Rect extends Shape {
    constructor(shpColor, fill, text) {
        super(shpColor, fill, text);
    }

    renderShape() {
        return `<rect x="150" y="100" width="80" height="80" fill="${this.shpColor}" /> `;
    }

    renderText() {}
    renderSVG(){}
};

class Circle extends Shape {
    constructor(shpColor, txtColor, text) {
        super(shpColor, txtColor, text);
    }

    renderShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shpColor}" />`;
    }

    renderText() {}
    renderSVG(){}
};

class Triangle extends Shape {
    constructor(shpColor, txtColor, text) {
        super(shpColor, txtColor, text);
    }

    renderShape() {
        return `<polygon points="50,50 50,100 100,50" fill="${this.shpColor}" />`;
    }

    renderText() {}
    renderSVG(){}
};

module.exports = {Shape, Rect, Circle, Triangle };