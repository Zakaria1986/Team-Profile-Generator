
const Employee = require("./lib/Employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const process = require('process');

const OUTPUT_DIR = path.resolve(__dirname, "output");
console.log(OUTPUT_DIR);
const outputPath = path.join(OUTPUT_DIR, "team.html");
console.log(outputPath);
const render = require("./src/page-template.js");
// const generateTeam = require('./src/./src/page-template.js');
const { default: Choice } = require("inquirer/lib/objects/choice");
const generateTeam = require('./src/page-template.js');
// getting the questions from the promptObjs files
const promptObjs = require("./lib/promptObjs");
const { Console } = require("console");

// Write a function that take inquirer function and promts user to select the type of user they want to create?
// This would have four choices
// - Manager - Engineer - Intern - Done adding employee to the system

// const buildingTeam = [];

console.log(promptObjs);

// resuable inquire function
function inquirerfunc(promptQuestions) {
    return inquirer.prompt(promptQuestions);
}

// Bulding arrays of objects
const builtTeam = [];

function createIndexJsFile(createFile) {
    fs.writeFileSync(outputPath, generateTeam(createFile), err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your team building skills are amazing.")
    });
}

// User choice function to be used in a loop till user decides not to use it any longer
function userchoiceFunc() {
    inquirerfunc(promptObjs.userChoice).then(userChoice => {
        console.log('........ You have selected: ', userChoice.selectedChoice, ' ........\n')
        repeatPrompt(userChoice.selectedChoice);
    })
}

// Prompt function to be used everytime user wants to add a new team member
function repeatPrompt(selectedChoice) {
    // Execute the correct function based on the user selection
    for (let i = 0; i < promptObjs.userChoice[0].choices.length; i++) {
        console.log('Consoling out the options ', promptObjs.userChoice[0].choices[i])

        if (promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(selectedChoice)] === promptObjs.userChoice[0].choices[0]) {
            inquirerfunc(promptObjs.managerQuestions).then((mData) => {
                console.log(mData.mName);

                // const manager = new Manager(mData.manName, mData.manId, mData.manEmail, mData.manOfficeNum, selectedChoice)
                const managerOb = new Manager(
                    mData.manName,
                    mData.manId,
                    mData.manEmail,
                    mData.manOfficeNum
                )

                builtTeam.push(managerOb);
                userchoiceFunc();
            });
            break;
        } else if (promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(selectedChoice)] === promptObjs.userChoice[0].choices[1]) {
            inquirerfunc(promptObjs.engineerQuestions).then((enData) => {
                // const manager = new Manager(mData.manName, mData.manId,mData.manEmail,mData.manOfficeNum,selectedChoice)
                // console.log(manager);
                const engineer = new Engineer(
                    enData.enName,
                    enData.enId,
                    enData.enEmail,
                    enData.enGithub
                );
                builtTeam.push(engineer);
                userchoiceFunc();
            });
            break;
        }
        else if (promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(selectedChoice)] === promptObjs.userChoice[0].choices[2]) {
            inquirerfunc(promptObjs.InternQuestion).then((intData) => {
                // console.log('This is intern promt: ', intData.intName);
                const intern = new Intern(
                    intData.intName,
                    intData.intId,
                    intData.intEmail,
                    intData.intSchool,
                );

                builtTeam.push((intern));
                userchoiceFunc();
            });
            break;
        } else if (promptObjs.userChoice[0].choices[promptObjs.userChoice[0].choices.indexOf(selectedChoice)] === promptObjs.userChoice[0].choices[3]) {

            createIndexJsFile(builtTeam);
            //Console out that building team is over
            console.log('you are done building your team');
            break;
        }
    }
}

// Initialise the functions
function initiatPrompt() {
    userchoiceFunc();
}
initiatPrompt();



// if the user selects any of the other options then prompt the user the series of quesiton by calling the functions



// TODO: Write Code to gather information about the development team members, and render the HTML file.


// webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

    // Create a command-line application that accepts user input using the provided starter code.
    //  * Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.



// if the user chooses from the option to continue to build the team, keep on promting the user with the same function to go through the same functon and keep on enter the same qusitons 
// Once thats done push it to an array as objects. 
// which then will then use fs moudle to generate html page and which creates the cards out of entered employee details