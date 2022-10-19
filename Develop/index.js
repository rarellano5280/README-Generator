// TODO: Include packages needed for this application

//Requires for npm packages and path for my generateMarkdown file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input

//Array of questions that will prompt the user a questions and validate the answer. If no answer is given is will log console log a message. 
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
        message:'How can someone contribute to this app?',
        name:'contribute',
        validate: contribResponse => {
        if (contribResponse) {
            return true;
        } else {
            console.log('Please provide details on how to someone can contribute to this app!');
            return false;
         }
        }
    },
    {
        type:'input',
        message:'How would someone test this project?',
        name:'test',
        validate: testResponse => {
        if (testResponse) {
            return true;
        } else {
            console.log('Please provide details on how you would test this app!');
            return false;
         }
        }
    },
    {
        type:'list',
        message:'Please choose a license from the list below?',
        name:'license',
        choices: ['Apache 2.0', 'GNU v3.0', 'MIT', 'Open Database', 'Mozilla Public', 'No license'],
        validate: licenseResponse => {
        if (licenseResponse) {
            return true;
        } else {
            console.log('Please provide the license that you would like to add to this project!');
            return false;
         }
        }
    },
    {
        type:'input',
        message:'Please provide your GitHub username',
        name:'github',
        validate: githubResponse => {
        if (githubResponse) {
            return true;
        } else {
            console.log('Please provide your Github username!');
            return false;
         }
        }
    },
    {
        type:'input',
        message:'Please provide your GitHub username',
        name:'github',
        validate: githubResponse => {
        if (githubResponse) {
            return true;
        } else {
            console.log('Please provide your Github username!');
            return false;
         }
        }
    },
    {
    type:'input',
    message:'Please provide your email.',
    name:'email',
    validate: emailResponse => {
    if (emailResponse) {
        return true;
    } else {
        console.log('Please provide your email.');
        return false;
     }
    }
},
];

// TODO: Create a function to write README file

//Function to write file from data 
function writeToFile(readme, data) {
    fs.writeFile(readme, data, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
};

// TODO: Create a function to initialize app

//function to initalize questions to prompt, and will write the user responses to a README.md file. 
function init() {
        inquirer.prompt(questions)
        .then(function (userResponse) {
            console.log(userResponse)
            writeToFile('README.md', generateMarkdown(userResponse));
        });
};

// Function call to initialize app
init();
