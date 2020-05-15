const fs = require ("fs");
// const path = require ("path");
const inquirer = require ("inquirer");
const axios = require ("axios");
const generateMarkdown = require ("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the URL to your project?",
        name: "url"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "use"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribute"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) {
            throw err;
        }
        console.log("Successfully generated Readme.md");
    })
}

function init() {
    inquirer.prompt(questions).then (function (data) {
        writeToFile("README.md", generateMarkdown(data));


    });
}

init();



// const axios = require ("axios");
// const queryUrl = `https://api.github.com/users/tingtingctt`;

// axios.get(queryUrl).then(function(res) {
// console.log(res.data.avatar_url);
// console.log(res.data.email)
// })