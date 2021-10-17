//variables requiring fs, path and inquirer package for questions
const fs = require('fs');
const path = require('path');
const inquirer = require("inquirer");

//variables importing the functions in LIB folder to here
//not going to create an employee it's just the class that goes to the other 3 
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//function to get employee info through inquirer prompts
function employeeInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeename',
            message: "Enter the employee's name"
        }
    ]).then(function(data) {
        // const employee = new Employee(data.employeeName, data.employeeId, data.employeeEmail);
        // console.log(employee);
    })
}

// if (getManager() === true) {
//     inquirer.prompt {}
// }
