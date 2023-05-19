# readme-generator

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Accomplishments
Used Import/Export in lieu of require() in order to adapt to latest version of node
Created Markdown.js file in order to get licenses and display final readme
Used Inquirer to generate prompts and answer selections
Generated table of contents with links to corresponding sections of the readme file

## Video Demonstration
![End to End](./artifacts/ReadmeGeneratorDemo.webm.mov)

## Referenced Information
https://plainenglish.io/blog/how-to-use-import-instead-of-require-statements-in-a-node-app-short

https://tecadmin.net/node-js-write-to-file-fs-writefile-function/

This slack article helped me fix badge/license links where I realized I needed to call the functions within the ${}
https://stackoverflow.com/questions/67013842/trying-to-place-license-badge-within-readme-md-using-node-js-but-getting-error-a

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

https://codingbeautydev.com/blog/javascript-unexpected-reserved-word-await/#:~:text=The%20%E2%80%9Cunexpected%20reserved%20word%20(await)%E2%80%9D%20error%20occurs%20in,'%E2%80%9D%20error%20occurring%20in%20JavaScript.

used this article to debug export which no longer matched class demonstrations:
https://stackoverflow.com/questions/74396736/the-requested-module-does-not-provide-an-export-named-default-javascript