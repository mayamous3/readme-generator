//MIT MIT
//https://img.shields.io/badge/License-MIT-yellow.svg)
//https://opensource.org/licenses/MIT

//Apache_2.0
//https://img.shields.io/badge/License-Apache_2.0-blue.svg
//https://opensource.org/licenses/Apache-2.0

//Mozilla MPL 2.0
//(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)
//(https://opensource.org/licenses/MPL-2.0)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = "";

  if(license = "MIT") {
    badge = "![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  else if (license = "MPL 2.0") {
    badge = "![License Badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

  }
  else if (license = "Apache_2.0") {
    badge = "![License Badge](https://opensource.org/licenses/Apache-2.0)";

  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  if(license = "MIT") {
    licenseLink = "![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  else if (license = "MPL 2.0") {
    licenseLink = "![License Badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

  }
  else if (license = "Apache_2.0") {
    licenseLink = "![License Badge](https://opensource.org/licenses/Apache-2.0)";

  }
  return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
