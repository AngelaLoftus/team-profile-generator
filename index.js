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
//one manager (reorganize later)
//template literal for engineers and interns 
createManager()
//call the function to start the prompts
// chooseEmployee();

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
         
        case "Exit": 
            writeToFile();
            
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
            name: 'id',
            message: "Enter the engineer's id as a number: ",
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
        if(isNaN(res.id)) {
            console.log("Error, you must enter a number for your id");
            console.log("try again");
            createEngineer();
        }

        const engineer = new Engineer(res.name, res.id, res.email, res.github);
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
            name: 'id',
            message: "Enter the intern's id as a number: ",
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
        if(isNaN(res.id)) {
            console.log("Error, you must enter a number for your id!");
            console.log("try again");
            createIntern();
        }

        const intern = new Intern(res.name, res.id, res.email, res.school);
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
            name: 'id',
            message: "Enter the manager's id as a number: ",
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
        if(isNaN(res.id)) {
            console.log("Error, you must enter a number for your id!");
            console.log("try again");
            createManager();
        }
        
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        managersArr.push(manager);
        console.log(managersArr);
        chooseEmployee();
    })
}

function renderEngineerHtml() {
    //map is a loop
    let templateEngineers = engineersArr.map(engineer => {
        //return the template literal for the card
        return  `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Engineer<br>${engineer.name} <i class="bi bi-eyeglasses"></i>
                        </h5>
                        <p class="card-text">
                        <br>Id: ${engineer.id}
                        <br><br>Email: <a href = "mailto: ${engineer.email}">${engineer.email}</a> 
                        <br><br>Github: <a href= "${engineer.github}" class="card-link" target="_blank">${engineer.github}</a></p>                        
                    </div>
                </div>`
    })
    console.log(templateEngineers);
    return templateEngineers.join(''); 
}

function renderInternHtml() {
    let templateInterns = internsArr.map(intern => {
        return  `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Intern<br>${intern.name} <i class="bi bi-person-badge-fill"></i>
                        </h5>
                        <p class="card-text">
                        <br>Id: ${intern.id}
                        <br><br>Email: <a href = "mailto: ${intern.email}">${intern.email}</a> 
                        <br><br>School: ${intern.school}</p>
                    </div>
                </div>`
    });
    console.log(templateInterns);
    return templateInterns.join('');
};

function renderManagerHtml() {
    let templateManagers = managersArr.map(manager => {
        return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Manager<br>${manager.name} <i class="bi bi-cup-fill"></i></h5>
                        <p class="card-text">
                        <br>Id: ${manager.id}
                        <br><br>Email: <a href = "mailto: ${manager.email}">${manager.email}</a> 
                        <br><br>Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>`
    })
    console.log(templateManagers);
    return templateManagers.join('');
}

//function for all of the html generation (engineer, manager, intern)
//return a big template literal
function createHtml () {
    //Copy boilerplate html that refers to the stylesheet
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel= "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="style.css">
      </head>
      <header class= "bg-danger" >
        <h1> My Team </h1>
      </header>
      <body>
        <div class ="container" >
            <div class = "row">
                <div class = "col-sm-4">
                    ${renderManagerHtml()}
                </div>
                <div class = "col-sm-4">
                    ${renderEngineerHtml()}
                </div>            
                <div class = "col-sm-4">
                    ${renderInternHtml()}
                </div>
            </div>
        </div>
        <script src="index.js"></script>
      </body>
    </html>
         `
}

function writeToFile() {

    fs.writeFile("./dist/index.html", createHtml(), err => {
        if(err) {
            return console.log(err);
        }
        console.log("Employee HTML was created successfully.");
    });
}

// console.log(managersArr);
// console.log(engineersArr);
// console.log(internsArr);
// if (getManager() === true) {
//     inquirer.prompt {}
// }
