const shapes = require('./lib/shapes');
const { circle } = require('./shapes');

function svgGenerator(data) {
    let outcome ; 
    switch (data.shape) {
            case 'circle':
                outcome= new Circle(data.shpColor)
                 break;
             case 'square':
                outcome= ;
                 break;
             case 'triangle':
                outcome= ;
                 break;
             case 'creative Commons Zero':
                outcome= ;
                 break;
            default:
                console.log(err);
                 break;
         }
         return outcome.renderShape()
}



module.exports = svgGenerator