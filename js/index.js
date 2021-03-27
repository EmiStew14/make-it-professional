// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('You need to enter a project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'Table of Contents',
    message: 'Provide a table of contents of the project (Optional)',
    choices:['Installation', 'Usage','Credits','License'],
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Provide a description of how to install the project',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('You need to enter a installation steps!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Provide an explanation of how to use your project and include screenshots',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('You need to enter a usage description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Credits',
    message: 'List your collaborators, if any, with links to their GitHubs profiles',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('You need to enter a usage description!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'License',
    message: 'Choose a license for your project',
    default: false
  },
]);
};

// TODO: Create a function to write README file
const writeToFile =(fileName, data) => {
   
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
