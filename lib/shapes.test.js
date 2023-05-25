const {Shape, Circle, Triangle, Rect } = require('./shapes');

describe('svgGenerator', () => {
    describe('Triangle', ()=>{
        it('should create a blue triangle', () => { const shape = new Triangle('blue', 'blue', 'asb');
        expect(shape.renderShape()).toEqual('<polygon points="150, 190 235,60 50,60" fill="blue" />') 
    })
})
})

describe('svgGenerator', () => {
    describe('Circle', ()=>{
        it('should create a blue circle', () => { const shape = new Circle('blue', 'blue', 'asb');
        expect(shape.renderShape()).toEqual('<circle cx="145" cy="110" r="70" fill="blue" />') 
    })
})
})

describe('svgGenerator', () => {
    describe('Rect', ()=>{
        it('should create a blue Rectangle', () => { const shape = new Rect('blue', 'blue', 'asb');
        expect(shape.renderShape()).toEqual('<rect x="99" y="60" width="100" height="100" fill="blue" />') 
    })
})
})
