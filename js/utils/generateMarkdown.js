const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 function renderLicenseBadge(license) {
  switch (license) {
    case "Apache license 2.0": 
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;

    case "Artistic license 2.0":
       "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
      break;

    case "Boost Software License 1.0":
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;

    case "BSD 2-clause license":
      "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
      break;

    case "BSD 3-clause license":
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;

    case "Creative Commons Zero v1.0 Universal":
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)"
        break;
    case "Creative Commons Attribution 4.0":
      "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"
        break;
    case "Creative Commons Attribution Share Alike 4.0":
      "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)"
        break;
                                               
    default:
      return ("");
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//  function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
 function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge();
  return `

  # ${data.title}

  ## Description:
    ${data.description}

  ## Table of Contents: 
    1. ${data.toc.toString()}

  ## Installation:
    > ${data.Installation}

  ## Usage:
    ${data.Usage}

  ## Credits:
    https://github.com/${data.Credits}

  ## License:
    ${data.License}

  ## Questions: 
    * Name: ${data.name}
    * Github:  https://github.com/${data.github}
    * ${data.about}

  `;
}

module.exports = generateMarkdown;
