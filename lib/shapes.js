class Shape {
    constructor(shpColor, txtColor) {
        this.shpColor = shpColor;
        this.txtColor=txtColor
    }
    renderShape() {
        return `<rect x="150" y="100" width="80" hight="80" fill="${this.shpColor}" />
        `
    }
    renderText(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">SVG</text>`
    }
    renderSVG() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${renderShape()}
  
    ${renderText()}
  
  </svg>`

    }
}
class Rect extends Shape {
    constructor(shpColor, fill) {
        super(shpColor, fill);
    }
    renderShape() {
        return `<rect x="150" y="100" width="80" hight="80" fill="${this.shpColor}" />
        `
    }
    renderText()
}
class Circle extends Shape {
    constructor(shpColor, txtColor) {
        super(shpColor, txtColor);  
    }

    renderShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shpcolor}" />
        `
    }
    renderText()
}
class Triangle extends Shape {
    constructor(shpColor, txtColor) {
        super(shpColor, txtColor); 
    }
    renderShape(){
        return `<polygon points="50,50 50,100 100,50" fill="${this.shpcolor}" />`
    }
    renderText()
}
// class text {
//     constructor(fill, posX, posY, txtAnchor) {
//         this.fill = fill;
//         this.posX = posX;
//         this.posY = posY;
//         this.txtAnchor = txtAnchor
//     }

// }

// const newRect = new Rect(
//     `${data.shpcolor}`,
//     '200',
//     '300',
//     '150',
//     '100',
// )

// const newCircle = new Circle(
//     `${data.shpcolor}`,
//     '200',
//     '300',
//     '150',
//     '100',
//     '80',
// )

// const newTriangle = new Triangle(
//     `${data.shpcolor}`,
//     '200',
//     '300',
//     '150',
//     '100',
//     '0,0',
//     '150, 200',
//     '300, 0',
// )


module.exports = { rect, circle, triangle, text };