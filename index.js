// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateFile = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your readme?',
        validate: nameField => {
            if (nameField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'about',
        message: 'Give a brief description of your project.',
        validate: aboutField => {
            if (aboutField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would you install this app?',
        validate: installationField => {
            if (installationField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use your project?',
        validate: usageField => {
            if (usageField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'What is the link to your github?',
        validate: githubLinkField => {
            if (githubLinkField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username?',
        validate: githubUsernameField => {
            if (githubUsernameField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
        validate: emailAddressField => {
            if (emailAddressField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    
// }

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questions)
    .then(function (data) {
        const createReadme = generateFile(data)
        fs.writeFileSync('./sample.md', createReadme)
    })
}

// Function call to initialize app
init();
