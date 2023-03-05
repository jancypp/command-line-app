
// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the project title?',
    name: 'projectTitle',
},
{
    type: 'input',
    message: 'What is the description?',
    name: 'description',
},
{
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'installationInstructions',
},
{
    type: 'input',
    message: 'What are you using this application for?',
    name: 'applicationUsage',
},
{
    type: 'input',
    message: 'Who contributed to the program?',
    name: 'contributors',
},
{
    type: 'input',
    message: 'How will you test this application?',
    name: 'testInstructions',
},
{
    type: 'list',
    message: 'What license do you want?',
    name: 'licenseType',
    choices: ['Apache', 'IBM', 'MIT', 'Mozilla', 'Unlicense']
},
{
    type: 'input',
    message: 'What is your github username?',
    name: 'userName',
},
{
    type: 'input',
    message: 'What is your email so that people can reach you if they have question?',
    name: 'emailAddress',

}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
writeToFile('./Output/README.md', generateMarkdown(data))
    })
 }

// Function call to initialize app
init();
