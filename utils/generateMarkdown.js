
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
;

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
;


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderlicenseBadge(data.license);
  renderLicenseLink(data.license);
  return `
  
  ${data.licenseLink}
  ${data.licenseBadge}
  ---

  # ${data.title}
  ## ${data.description}

  ---

  ## Table of Contents
  1. [Installation Instructions] (#installation)
  2. [Usage Instructions] (#usage)
  3. [Testing] (#testing)
  4. [Contributors] (#contributors)
  5. [Contact Information] (#contact)
  6. [License] (#license)
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
  ## Contact
  * Github Username:${data.username}
  * E-mail Address:  ${data.installation}
  
  ---
  ## License
  ${data.licenseLink}

  `;


}

export default generateMarkdown
