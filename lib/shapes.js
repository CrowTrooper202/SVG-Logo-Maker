class Shape {
    constructor(shpColor, height, width, posX, posY, fill) {
        this.shpColor = shpColor;
        this.height = height;
        this.width = width;
        this.posX = posX;
        this.posY = posY;
        this.fill=fill
    }
    renderShape() {
        return `<rect x="150" y="100" width="80" hight="80" fill="${this.shpColor}" />
        `
    }
    renderText(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fill}">SVG</text>`
    }
    renderSVG() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${renderShape()}
  
    ${renderText()}
  
  </svg>`

    }
}
class Rect extends Shape {
    constructor(shpColor, height, width, posX, posY) {
        super(shpColor, height, width, posX, posY);
    }
    renderShape() {
        return `<rect x="150" y="100" width="80" hight="80" fill="${this.shpColor}" />
        `
    }
}
class Circle extends Shape {
    constructor(height, width, shpColor, posX, posY) {
        super(shpColor, height, width, posX, posY, radius);
        this.radius = radius;
    }

    renderShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shpcolor}" />
        `
    }
}
class Triangle extends Shape {
    constructor(shpColor, height, width, posX, posY) {
        super(shpColor, height, width, posX, posY, point1, point2, point3);
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }
}
// class text {
//     constructor(fill, posX, posY, txtAnchor) {
//         this.fill = fill;
//         this.posX = posX;
//         this.posY = posY;
//         this.txtAnchor = txtAnchor
//     }

// }

const newRect = new Rect(
    `${data.shpcolor}`,
    '200',
    '300',
    '150',
    '100',
)

const newCircle = new Circle(
    `${data.shpcolor}`,
    '200',
    '300',
    '150',
    '100',
    '80',
)

const newTriangle = new Triangle(
    `${data.shpcolor}`,
    '200',
    '300',
    '150',
    '100',
    '0,0',
    '150, 200',
    '300, 0',
)


module.exports = { rect, circle, triangle, text };