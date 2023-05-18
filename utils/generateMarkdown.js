
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderlicenseBadge(license) {
  let licenseBadge = "";

  if(license = "MIT") {
    licenseBadge = "![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  else if (license = "MPL 2.0") {
    licenseBadge = "![License Badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

  }
  else if (license = "Apache_2.0") {
    licenseBadge = "![License Badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  if(license = "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  }
  else if (license = "MPL 2.0") {
    licenseLink = "https://opensource.org/licenses/MPL-2.0";

  }
  else if (license = "Apache_2.0") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";

  }
  return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection= "";

  if(license != "None") {
    licenseSection += "## License\n"
    licenseSection += "License details are available at this link: " + renderLicenseLink
  }
  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `
  ${data.licenseBadge}
  ---

  # ${data.title}
  ## ${data.description}

  ---

  ## Table of Contents
  ### [Installation Instructions] (#installation%20instructions)
  ### [Usage Instructions] (#usage%20instructions)
  ### [Test Cases] (#test%20cases)
  ### [Contributors] (#contributors)
  ### [Contact Information] (#contact%20information)
  ### [License] (#license)
  ---
  ## Installation Instructions
    ${data.installation}

  ---
  ## Usage Instructions
    ${data.usage}

  ---
  ## Test Cases
    ${data.tests}

  ---
  ## Contributors
    ${data.contributing}

  ---
  ## Contact Information
  * Github Username:${data.username}
  * E-mail Address:  ${data.installation}
  
  ---
  ## License
  ${data.licenseSection}

  `;


}

export default generateMarkdown
