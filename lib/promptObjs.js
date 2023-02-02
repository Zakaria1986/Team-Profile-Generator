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
            message: 'Please enter managers name:'
        },
        {
            type: 'input',
            name: 'manId',
            message: 'Please enter managers id:'
        },
        {
            type: 'input',
            name: 'manEmail',
            message: 'Please enter managers email:'
        },
        {
            type: 'input',
            name: 'manOfficeNum',
            message: 'Please enter managers office number:'
        }
    ],
    engineerQuestions: [
        {
            type: 'input',
            name: 'enName',
            message: 'Please enter engineers name:'
        },
        {
            type: 'input',
            name: 'enId',
            message: 'Please enter engineers id:'
        },
        {
            type: 'input',
            name: 'enEmail',
            message: 'Please enter engineers email:'
        },
        {
            type: 'input',
            name: 'enGithub',
            message: 'Please enter engineers github name:'
        }
    ],
    InternQuestion: [
        {
            type: 'input',
            name: 'intName',
            message: 'Please enter interns name:'
        },
        {
            type: 'input',
            name: 'intId',
            message: 'Please enter Interns id:'
        },
        {
            type: 'input',
            name: 'intEmail',
            message: 'Please enter interns email?'
        },
        {
            type: 'input',
            name: 'intSchool',
            message: 'Please enter interns school name?'
        }]
}

module.exports = promptObjs;