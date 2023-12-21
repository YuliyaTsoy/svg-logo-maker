# Object-oriented Programming: SVG Logo Maker

## About this application:
This is a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

 Jest for running the unit tests and Inquirer for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```
The application includes Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest.

## Demo Link
https://drive.google.com/file/d/1Q0CQ_TV_IRHOx73Ras3eugs8fVAlfT7N/view Links to an external site.

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Screenshot
![svg logo](./images/image.png)