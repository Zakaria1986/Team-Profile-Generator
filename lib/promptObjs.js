const { validateHeaderName } = require("http");

const promptObjs = {
    userChoice: [
        {
            type: 'list',
            name: 'selectedChoice',
            message: "Select an employee option to add to the team?",
            choices: ["Manager", "Engineer", "Intern", "Exit building team"]
        }
    ],

    managerQuestions: [
        {
            type: 'input',
            name: 'manName',
            message: 'Please enter managers name:',
            validate: (userInput) => {
                return !userInput.length ? "Please enter at least character" : true;
            }
        },
        {
            type: 'input',
            name: 'manId',
            message: 'Please enter managers id:',
            validate: (manId) => {
                return !manId.length ? "Please enter at least character" : true;
            }
        },
        {
            type: 'input',
            name: 'manEmail',
            message: 'Please enter managers email:',
            validate: (manEmail) => {
                return !manEmail.length ? "Please enter at least character" : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(manEmail) ? true : "Enter valid email addres";
            }
        },
        {
            type: 'input',
            name: 'manOfficeNum',
            message: 'Please enter managers office number:',
            validate: (manOfficeNum) => {
                return !manOfficeNum.length ? "Please enter at least character" : true;
            }
        }
    ],
    engineerQuestions: [
        {
            type: 'input',
            name: 'enName',
            message: 'Please enter engineers name:',
            validate: (userInput) => {
                return !userInput.length ? "Please enter at least character" : true;
            }
        },
        {
            type: 'input',
            name: 'enId',
            message: 'Please enter engineers id:',
            validate: (userInput) => {
                return !userInput.length ? "Please enter at least character" : true;
            }
        },
        {
            type: 'input',
            name: 'enEmail',
            message: 'Please enter engineers email:',
            validate: (manEmail) => {
                return !manEmail.length ? "Please enter at least character" : manEmail.length > 0 ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(manEmail) : "Enter valid email addres";
            }
        },
        {
            type: 'input',
            name: 'enGithub',
            message: 'Please enter engineers github name:',
            validate: (userInput) => {
                return !userInput.length ? "Please enter at least character" : true;
            }
        }
    ],
    InternQuestion: [
        {
            type: 'input',
            name: 'intName',
            message: 'Please enter interns name:',
            validate: (userInput) => {
                return !userInput.length ? "Please enter at least character" : true;
            }
        },
        {
            type: 'input',
            name: 'intId',
            message: 'Please enter Interns id:',
            validate: (userInput) => {
                return !userInput.length ? "Please enter at least character" : true;
            }
        },
        {
            type: 'input',
            name: 'intEmail',
            message: 'Please enter interns email?'
            ,
            validate: (manEmail) => {
                return !manEmail.length ? "Please enter at least character" : manEmail.length > 0 ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(manEmail) : "Enter valid email addres";
            }
        },
        {
            type: 'input',
            name: 'intSchool',
            message: 'Please enter interns school name?',
            validate: (userInput) => {
                return !userInput.length ? "Please enter at least character" : true;
            }
        }]
}

module.exports = promptObjs;