const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

    // Create a command-line application that accepts user input using the provided starter code.
    //  * Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.     