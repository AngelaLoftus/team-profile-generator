//variables requiring fs, path and inquirer package for questions
const fs = require('fs');
const path = require('path');
const inquirer = require("inquirer");

//variables importing the functions in LIB folder to here
//not going to create an employee it's just the class that goes to the other 3 
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//set up the array to store each instance of an employee created by the inquirer prompts
let engineersArr = [];
let internsArr = [];
let managersArr = [];



//call the function to start the prompts
chooseEmployee();

//function to get employee info through inquirer prompts
//allow user to choose which type of employee they are adding
function chooseEmployee() {
    inquirer.prompt([
        
        {
            type: 'list',
            name: 'employeeType',
            message: "What type of employee do you want to add?",
            choices: [
                'Engineer',
                'Intern',
                'Manager',
                'Exit',
            ]
        }
    ]).then(res => {
        console.log(res);
        switch(res.employeeType) {
            case "Engineer": 
            console.log("You created an engineer");
            createEngineer();
        
        break;
        case "Intern":
            console.log("You created an intern");
            createIntern();
            break;
        case "Manager":
            console.log("You created a manager");
            createManager();
            break;
        case "Exit": 
            // createHtml();
            console.log("Team successfully created. Goodbye.")
            break; 
        }
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name: "
        },
        { 
            type: 'number',
            name: 'salary',
            message: "Enter the engineer's salary as a number: ",
        },
        {
            type: "input",
            name: 'email',
            message: "Enter the engineer's email address: ",
        },
        { 
            type: 'input',
            name: 'github',
            message: "Enter the engineer's github link: ",
        }
    ]).then(res => {
        console.log(res);
        if(isNaN(res.salary)) {
            console.log("Error, you must enter a number for your salary");
            console.log("try again");
            createEngineer();
        }

        const engineer = new Engineer(res.name, res.salary, res.email, res.github);
        engineersArr.push(engineer);
        console.log(engineersArr);
        chooseEmployee();
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name:"
        },
        { 
            type: 'number',
            name: 'salary',
            message: "Enter the intern's salary as a number: ",
        },
        {
            type: "input",
            name: 'email',
            message: "Enter the intern's email address: ",
        },
        { 
            type: 'input',
            name: 'school',
            message: "Enter the intern's school: ",
        }
    ]).then(res => {
        console.log(res);
        if(isNaN(res.salary)) {
            console.log("Error, you must enter a number for your salary!");
            console.log("try again");
            createIntern();
        }

        const intern = new Intern(res.name, res.salary, res.email, res.school);
        internsArr.push(intern);
        console.log(internsArr);
        chooseEmployee();
    })
}

function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name:"
        },
        { 
            type: 'number',
            name: 'salary',
            message: "Enter the manager's salary as a number: ",
        },
        {
            type: "input",
            name: 'email',
            message: "Enter the manager's email address: ",
        },
        { 
            type: 'number',
            name: 'officeNumber',
            message: "Enter the manager's office number as a number: ",
        }
    ]).then(res => {
        console.log(res);
        if(isNaN(res.salary)) {
            console.log("Error, you must enter a number for your salary!");
            console.log("try again");
            createManager();
        }

        const manager = new Manager(res.name, res.salary, res.email, res.officeNumber);
        managersArr.push(manager);
        console.log(managersArr);
        chooseEmployee();
    })
}

console.log(managersArr);
console.log(engineersArr);
console.log(internsArr);
// if (getManager() === true) {
//     inquirer.prompt {}
// }
