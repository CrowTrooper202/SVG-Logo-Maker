class shape {
    constructor(text, txtColor, shpColor, height, width,){
        this.text=text;
        this.txtColor=txtColor;
        this.shpColor=shpColor;
        this.height=height;
        this.width=width;
    }  
}
class rect extends shape{
    constructor(text, txtColor, shpColor, height, width,){
        super(text, txtColor, shpColor, height, width, posX, posY);
    }
}
class circle extends shape{
    constructor(text, txtColor, height, width, shpColor){
        super(text, txtColor, shpColor, height, width, posX, posY);
        this.radius=radius;
    }
}
class triangle extends shape{
    constructor(text, txtColor, shpColor, height, width,){
        super(text, txtColor, shpColor, height, width, posX, posY);
        this.point1=point1;
        this.point2=point2;
        this.point3=point3;
    }
}




module.exports = shapes;