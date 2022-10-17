// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What would you like the title of your project to be?',
        name:'title',
        validate: titleResponse => {
        if (titleResponse) {
            return true;
        } else {
            console.log('You need to input a valid title!');
            return false;
         }
        }
    },
    {
        type:'input',
        message:'Please provide a description for your project.',
        name:'description',
        validate: descripResponse => {
        if (descripResponse) {
            return true;
        } else {
            console.log('You need to input a description for your project!');
            return false;
         }
        }
    },
    {
        type:'input',
        message:'What is the installation process for this app?',
        name:'installation',
        validate: installResponse => {
        if (installResponse) {
            return true;
        } else {
            console.log('Please provide a installation process!');
            return false;
         }
        }
    },
    {
        type:'input',
        message:'How do you use this app?',
        name:'usage',
        validate: usageResponse => {
        if (usageResponse) {
            return true;
        } else {
            console.log('Please provide details on how to use your app!');
            return false;
         }
        }
    },
    {
        type:'input',
        message:'How do you use this app?',
        name:'usage',
        validate: usageResponse => {
        if (usageResponse) {
            return true;
        } else {
            console.log('Please provide details on how to use your app!');
            return false;
         }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions)
}

// Function call to initialize app
init();
