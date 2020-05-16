const axios = require ("axios");
const fs = require ("fs")

function generateMarkdown(data) {
    let imgURL = "";
    let githubEmail = "";
    let html = "";
  
    // Axios using user prompted data to retrieve their github profile img and email
    const queryUrl = `https://api.github.com/users/${data.username}`;
    
    axios.get(queryUrl).then(function(res) {
    imgURL = res.data.avatar_url;
    githubEmail = res.data.email;

    // save both user prompted answers and axios feedback to be passed onto writeFile function
    data = {...data, imgURL:imgURL, githubEmail:githubEmail}
    
    // save temperate literal to this variable
    html = `

# ${data.title}

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

## Description

${data.description}

The deployed application can be found at ${data.url}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install dependencies, run command: ${data.install}

## Usage

${data.use}

## License

This project is licensed under ${data.license}

## Contributing

${data.contribute}

## Tests

To run tests, use command: ${data.tests}

## Questions

![profile pic](${data.imgURL}) \n
If you have any questions or suggestions, open an issue or contact my github email at (${data.githubEmail}),
if null, please direct email me at ${data.email}.`;

// Built a promise to write file AFTER all info is recorded in the template literal
      return new Promise(function(resolve, reject) {
        fs.writeFileSync('README.md', html, function(err, results) {
          if (err) {
            return reject(err)}
          else {
            resolve(results)}
          })
       })
    })
}

module.exports = generateMarkdown;
