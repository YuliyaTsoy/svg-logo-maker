const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');

// generateLogo function creates svg logo using inquirer prompts and writes data to file logo.svg
function generateLogo(response){
    const svg = makeShape(response);
    fs.writeFile("logo.svg", svg, () => console.log("Successfully generated logo!"))
}

// initializes generateLogo function using responses
function init () {
inquirer
.prompt(questions)

.then ((response)=>{
    // checks if logo text is no more than 3 characters
    if (response.text.length > 3) {
        console.log("Try again! Text must be up to 3 characters!");
    }
    generateLogo(response);
});

// // catches errors if any
// .catch (err => {
//     console.log(err)
// });

}

init();