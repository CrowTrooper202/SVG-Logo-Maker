class shape {
    constructor(shpColor, height, width, posX, posY){
        this.shpColor=shpColor;
        this.height=height;
        this.width=width;
    }  
}
class rect extends shape{
    constructor(shpColor, height, width, posX, posY){
        super(shpColor, height, width, posX, posY);
    }
}
class circle extends shape{
    constructor(height, width, shpColor,posX, posY){
        super(shpColor, height, width, posX, posY, radius);
        this.radius=radius;
    }
}
class triangle extends shape{
    constructor(shpColor, height, width,posX, posY){
        super(shpColor, height, width, posX, posY, point1, point2, point3);
        this.point1=point1;
        this.point2=point2;
        this.point3=point3;
    }
}
class text {
    constructor(fill, posX, posY, txtAnchor){
        this.fill=fill;
        this.posX=posX;
        this.posY=posY;
        this.txtAnchor=txtAnchor
    }
}

const newRect = new rect(
    `${data.shpcolor}`,
    '200',
    '300',
    '50',
    '50',
)

const newCircle = new circle(
    `${data.shpcolor}`,
    '200',
    '300',
    '50',
    '50',
    '100',
)

const newTriangle = new triangle(
    `${data.shpcolor}`,
    '200',
    '300',
    '50',
    '50',
    '0,0',
    '150, 200',
    '300, 0',
)


module.exports = shapes;