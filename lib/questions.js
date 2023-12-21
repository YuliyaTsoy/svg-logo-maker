const questions = [
    // shape choice
{
    name: 'shape',
    message: "Please choose shape for your logo",
    type: "list",
    choices: ['Circle', 'Square', 'Triangle']
},
    // shape color
    {
        name: 'shapeColor',
        message: 'Please choose a shape color for your logo using color keyword or hexadecimal number',
        type: 'input',
        
    },
     // text on the logo
     {
        type: "input",
        message:
          "Please enter text for your logo (up to 3 charachters are allowed)",
        name: "text",
      },
      // text color
      {
        type: "input",
        message:
          "Please choose a shape color for your logo using color keyword (keyword must be lowercase) or hexadecimal number",
        name: "textColor",
      },
]
.then ((answers)=>{
    // checks if logo text is no more than 3 characters
    if (answers.text.length > 3) {
        console.log("Try again! Text must be up to 3 characters!");
    }
});
module.exports = questions;