function generateMarkdown(data) {
  return `
# ${data.title}

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

${data.description}

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

If you have any questions or suggestions, open an issue or contact ${data.username} at ${data.email}

`;
}

module.exports = generateMarkdown;
