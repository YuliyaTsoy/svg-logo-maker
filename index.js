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
    // checks if logo text is no more than 3 characters
    if (response.text.length <= 3) {
        generateLogo(response);
    } else
   
    console.log("Try again! Text must be up to 3 characters!");
});

}
// catches errors if any
// .catch((err) => console.log(err));


init();