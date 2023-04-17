const inquirer = require('inquirer')
const fs = require('fs')

const generateSVG = require('./lib/shapes')
const svgGenerator = require('./lib/svgGenerator')

inquirer
        .prompt([
            {
                type: 'input',
                message: 'What letters do you want? Please, limit it to three.',
                name: 'text',
            },
            {
                type: 'input',
                message: 'What color do want for the text?',
                name: 'txtColor',
            },
            {
                type: 'list',
                message: 'What Shape do you want?',
                choices:['triangle', 'square', 'circle'],
                name: 'shape',
            },
            {
                type: 'list',
                message: 'What color shape do you want?',
                name: 'shpColor',
            }
        ])
        
        .then((data) => {
    
            const name = `logo.svg`
            fs.writeFile(name, svgGenerator(data), (err) =>
                err ? console.log(err) : console.log('success!'))
        })
