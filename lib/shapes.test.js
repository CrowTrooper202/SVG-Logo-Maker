const {Shape, Circle, Triangle, Rect } = require('./shapes');

describe('svgGenerator', () => {
    describe('Triangle', ()=>{
        it('should create a blue triangle', () => { const shape = new Triangle('blue', 'blue', 'asb');
        expect(shape.renderShape()).toEqual('<polygon points="150, 190 235,60 50,60" fill="blue" />') 
    })
})
})
