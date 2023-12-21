const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');

// generateLogo function creates svg logo using inquirer response and writes data to file 
function generateLogo(response){
    const svg = setShape(response);
    fs.writeFile("logo.svg", svg, () => console.log("Successfully generated logo!"))
}

// initializes generateLogo function using responses
function init () {
inquirer
.prompt(questions)
.then ((response) => {
    generateLogo(response);
})
// catches errors if any
.catch (err => {
    console.log(err)
});
}

init();