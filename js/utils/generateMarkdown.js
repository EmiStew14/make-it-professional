const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 function renderLicenseBadge(license) {
   $("#badge").html("");
  switch (license) {
    case "Apache license 2.0": 
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
      break;

    case "Artistic license 2.0":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)");
      break;

    case "Boost Software License 1.0":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)");
      break;

    case "BSD 2-clause license":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)");
      break;

    case "BSD 3-clause license":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)");
      break;

    case "Creative Commons Zero v1.0 Universal":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)");
        break;
    case "Creative Commons Attribution 4.0":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)");
        break;
    case "Creative Commons Attribution Share Alike 4.0":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)");
        break;
    case "":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
        break;
    case "":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
        break;
    case "":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
        break;
    case "Do What The F*ck You Want To Public License":
      let displayApache = document.getElementById("icon");
        displayApache.setAttribute('src', "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)");
        break;
                                                                                                                                    
    default:
      break;
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
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${data.title}</h1>

    <h1>Description</h1>
    <span id="badge">
    <img id="icon"></img>
    <span>
      <p>${data.description}</p>

    <h1>Table of Contents</h1>
      <ul> 
      <li>${data.toc.choices}</li>

    <h1>Installation</h1>
      <p>${data.installation}</p>

    <h1>Usage</h1>
      <p>${data.usage}</p>

    <h1>Credits</h1>
    <h2><a href="https://github.com/${data.Credits}">Github</a></h2>
    <p>${data.Credits}</p>

    <h1>License</h1>
      <p>${data.License}<p>

    <h2>Questions</h2>

  </body>
  </html>
  `;
}

module.exports = generateMarkdown;
