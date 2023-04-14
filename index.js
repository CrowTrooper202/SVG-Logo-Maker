const inquirer = require('inquirer')
const fs = require('fs')

const gererateSVG = require('./lib/shapes')

inquirer
        .prompt([
            {
                type: 'input',
                message: 'What letters do you want? Please, limit it to three.',
                name: 'text',
            },
            {
                type: 'list',
                message: 'What color do want for the text?',
                choices:[],
                name: 'txtColor',
            },
            {
                type: 'list',
                message: 'What Shape do you want?',
                choices:['trangle', 'square', 'circle'],
                name: 'shape',
            },
            {
                type: 'list',
                message: 'What color shape do you want?',
                name: 'shpColor',
                choices: [],
            }
        ])
        
        // .then((data) => {
    
        //     const name = `ReadMeTest.md`
        //     fs.writeFile(name, generateMarkdown(data), (err) =>
        //         err ? console.log(err) : console.log('success!'))
        // })
