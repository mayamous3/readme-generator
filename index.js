// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs  from 'fs'
import util from 'util'
import generateMarkdown from './utils/generateMarkdown.js';
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project title is required to create this Readme File.");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a project description.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Installation instructions are required to create this Readme File.");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for your project.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Usage instructions are required to create this Readme File.");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide a list of any contributors to your project.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide the test criteria applied to your project.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Unit Test cases are required to create this Readme File.");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A github username is required to create this Readme File.");
            }
            return true;
        }
      },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("An email address is required to create this Readme File.");
            }
            return true;
        }
      },
    {
      type: 'list',
      message: 'Please select a license to add to your Readme File.',
      name: 'license',
      choices: ['Apache 2.0 License', 'MIT License', 'Mozilla Public License 2.0'],
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A license is required to create this Readme File.");
        }
        return true;
    }
    },
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
         if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
    const answers = await (inquirer.prompt(questions));
    const markdown = generateMarkdown(answers);
    console.log(markdown);
    writeFileAsync('TestREADME.md', markdown);
    }
    catch (error) {
    console.log(error);
    }
};

// Function call to initialize app
init();
