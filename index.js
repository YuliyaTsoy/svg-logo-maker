const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const makeShape = require('./lib/makeShape.js')

// generateLogo function creates svg logo using inquirer prompts and writes data to file logo.svg
function generateLogo(response){
    const svg = makeShape(response);
    fs.writeFile("./examples/logo.svg", svg, () => console.log("Successfully generated logo!"))
}

// starts prompts and generates logo based on user choices
function init () {
inquirer
.prompt(questions)

.then ((response)=>{
  
        generateLogo(response);
    
});

}


init();