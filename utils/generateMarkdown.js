
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderlicenseBadge(license) {
  let licenseBadge = "";

  if(license = "MIT License") {
    licenseBadge = "![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  else if (license = "Mozilla Public License 2.0") {
    licenseBadge = "![License Badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

  }
  else if (license = "Apache 2.0 License") {
    licenseBadge = "![License Badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

  }
  else {
    licenseBadge=" "
  }
  return licenseBadge;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  if(license = "MIT License") {
    licenseLink = "https://opensource.org/licenses/MIT";
  }
  else if (license = "Mozilla Public License 2.0") {
    licenseLink = "https://opensource.org/licenses/MPL-2.0";

  }
  else if (license = "Apache 2.0 License") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";

  }
  else {
    licenseLink=" "
  }
  return licenseLink;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `
  
  ${renderlicenseBadge(data.license)}

  ---

  # ${data.title}


  ---

  # Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Testing](#testing)
  5. [Contributors](#contributors)
  6. [Questions](#questions)
  7. [License](#license)
 
  ---
 
  ## Description
 
 ${data.description}

 ---

  ## Installation
    ${data.installation}

  ---
  ## Usage
    ${data.usage}

  ---
  ## Testing
    ${data.tests}

  ---
  ## Contributors
    ${data.contributing}

  ---
  ## Questions
  Please contact me directly via e-mail or look me up on github!
  I am always happy to respond to questions.
  * Github Username: https://github.com/${data.username}
  * E-mail Address:  ${data.installation}
  
  ---
  ## License
  ${renderLicenseLink(data.license)}

  `;


}

export default generateMarkdown
