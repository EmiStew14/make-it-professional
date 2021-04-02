// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile, copyFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
 const questions = [];

 //Contact section 
 const reachMe = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username (Required)',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'confirmAbout',
          message: 'Would you like to enter some information about yourself for an "About" section?',
          default: true
        },
        {
          type: 'input',
          name: 'about',
          message: 'Provide some information about yourself:',
          when: ({ confirmAbout }) => confirmAbout
        }
      ])
      .then(questions => {
        questions.push(data);
      });
    };
// TODO: Create a function to write README file
const init = () => {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
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
        name: 'toc',
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
        type: 'confirm',
        name: 'creditsConfirm',
        message: 'Is there anyone else who helped this project?',
        default: true
      },
      {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators with their GitHub usernames',
        when: ({ creditsConfirm }) => creditsConfirm,
        validate: creditInput => {
            if (creditInput) {
              return true;
            } else {
              console.log('You need to enter a Github Username!');
              return false;
            }
          }
      },
      {
        type: 'confirm',
        name: 'confirmAddMore',
        message: 'Would you like to enter another collaborator?',
        default: false
      },
      {
        type: 'input',
        name: 'License',
        message: 'Input a license for your project',
        default: true,
      },
    ])
    .then( data => {
    if (data.confirmAddMore) {
        return (data.Credits);
      } else {
        return data;
      }
    })
.catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});
}
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('/.README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

// Function call to initialize app
init()
    .then(writeToFile)
    .then(data => {
     return generateMarkdown(data);
   })
   .then(pageHTML => {
     return writeFile(pageHTML);
   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
   .catch(err => {
     console.log(err);
   });
