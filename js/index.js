// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
 const questions = [];
 const inquireQuestions = [
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
   choices:['Installation', 'Usage','Credits','License','Test'],
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
   type: 'list',
   pageSize: 10,
   loop: false,
   name: 'License',
   message: 'Input a license for your project',
   choices: ["Apache license 2.0","Artistic license 2.0",
"Boost Software License 1.0","BSD 2-clause license","BSD 3-clause license","Creative Commons Zero v1.0 Universal",
"Creative Commons Attribution 4.0","Creative Commons Attribution Share Alike 4.0","Do What The F*ck You Want To Public License"],
 },
 {
     type:'input',
     name: 'Test',
     message: 'Write instructions on how to test your project',
     validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('You need to enter test instructions!');
          return false;
        }
    },
},
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
];

// TODO: Create a function to write README file
const init = () => {
    return inquirer
    .prompt(inquireQuestions)
    .then( data => {
    if (data.confirmAddMore) {
        console.log(data);
        return (data.Credits);
      } else {
          console.log(data);
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
     const makeFile = fileContent => {
         return new Promise((resolve, reject) => {
           fs.writeFile('./dist/README.md', fileContent, err => {
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
    .then(data => {
     return generateMarkdown(data);
   })
   .then(content => {
       console.log(content);
       makeFile(content);
   })
   .catch(err => {
     console.log(err);
   });