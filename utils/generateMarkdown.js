const axios = require ("axios");


function generateMarkdown(data) {
  
  let imgURL = "";
  let githubEmail = "";
  
  const queryUrl = `https://api.github.com/users/${data.username}`;
  axios.get(queryUrl).then(function(res) {
    imgURL = res.data.avatar_url;
    githubEmail = res.data.email;
    console.log(res);
    return data, imgURL, githubEmail;
  }).then(function(data) {


  return `
# ${data.title}

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

${data.description}

The deployed application can be found at ${data.url}

## Table of Contents
* Title
* Description
* Installation
* Usage
* License
* Contributing
* Tests
* Questions

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


Format: ![profile pic](${imgURL})

If you have any questions or suggestions, open an issue or contact my github email at ${githubEmail}
or direct email at ${data.email}

`;
})
}

module.exports = generateMarkdown;
