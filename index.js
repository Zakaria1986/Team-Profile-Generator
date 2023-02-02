
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
const { default: Choice } = require("inquirer/lib/objects/choice");
// getting the questions from the promptObjs files
const promptObjs = require("./lib/promptObjs");
const { Console } = require("console");

console.log('everything is working fine, greate stuff Zak!');
// Write a function that take inquirer function and promts user to select the type of user they want to create?
// This would have four choices
// - Manager - Engineer - Intern - Done adding employee to the system

const buildingTeam = [];

console.log(promptObjs);


// resuable inquire function
function inquirerfuc(promptQuestions) {
    return inquirer.prompt(promptQuestions);
}

function initiatPrompt() {
    inquirerfuc(promptObjs.userChoice).then(userChoice => {
        console.log('........ You have selected: ', userChoice.selectedChoice + ' ........\n');

        console.log('you are dynamically enter value: ', promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice)])

        for (let i = 0; i < promptObjs.userChoice[0].choices.length; i++) {
            console.log('Consoling out the options ', promptObjs.userChoice[0].choices[i])

            if (promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice)] === promptObjs.userChoice[0].choices[0]) {
                console.log('index: ', promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice), ' value: ', promptObjs.userChoice[0].choices[0]);
                break;
            } else if (promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice)] === promptObjs.userChoice[0].choices[1]) {
                console.log('index: ', promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice), ' value: ', promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice)])
                break;
            }
            else if (promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice)] === promptObjs.userChoice[0].choices[2]) {
                console.log('index: ', promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice), ' value: ', promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice)])
                break;
            } else if (promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice)] === promptObjs.userChoice[0].choices[3]) {
                console.log('index: ', promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice), ' value: ', promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(userChoice.selectedChoice)])
                break;
            }
        }


    })
}
initiatPrompt();


// inquirerfuc(promptObjs.InternQuestion).then(intData => {
//     console.log(`Interns name: ${intData.intName}\n Interns id: ${intData.intId} \n interns email: ${intData.intEmail}\n interns school name: ${intData.intSchool}`)
// });


    // if the option is no more employee is needed then exist and build html templates


// if the user selects any of the other options then prompt the user the series of quesiton by calling the functions



// TODO: Write Code to gather information about the development team members, and render the HTML file.


// webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

    // Create a command-line application that accepts user input using the provided starter code.
    //  * Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.



// if the user chooses from the option to continue to build the team, keep on promting the user with the same function to go through the same functon and keep on enter the same qusitons 
// Once thats done push it to an array as objects. 
// which then will then use fs moudle to generate html page and which creates the cards out of entered employee details