const shapes = require('./lib/shapes');
const {Shape, Circle, Triangle, Rect } = require('./shapes');

function svgGenerator(data) {
    let outcome ; 
    switch (data.shape) {
            case 'circle':
                outcome= new Circle(data.shpColor, data.txtColor)
                 break;
             case 'square':
                outcome= new Rect(data.shpColor, data.txtColor);
                 break;
             case 'triangle':
                outcome= new Triangle(data.shpColor, data.txtColor);
                 break;
            default:
                console.log(err);
                 break;
         }
         return outcome.renderShape()
}



module.exports = svgGenerator()