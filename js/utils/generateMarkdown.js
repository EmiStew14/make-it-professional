const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
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
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

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
    <h1>${data.description}</h1>
    <h1>${data.toc}</h1>
      <ul> 
      <li>${data.toc.choices}</li>
    <h1>${data.installation}</h1>
    <h1>${data.usage}</h1>
    <h1>${data.Credits}</h1>
    <h1>${data.License}</h1>
    <h2><a href="https://github.com/${data.Credits}">Github</a></h2>
  </body>
  </html>
  `;
}

module.exports = generateMarkdown;
