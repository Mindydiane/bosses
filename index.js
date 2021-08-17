const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// all employees data storage
const employees = [];

// function startPoint() {
//   inquirer
//     .prompt([
//       {
//         message: "What is the manager's name?",
//         name: "mgrName",
//       },
//       {
//         message: "What is the manager's id?",
//         name: "mgrId",
//       },
//       {
//         message: "What is the email?",
//         name: "mgrEmail",
//       },
//       {
//         message: "What is the office Number?",
//         name: "mgrOffice",
//       },
//     ])
//     .then((response) => {
//       // console.log(response)

//       const newManager = new Manager(
//         response.mgrName,
//         response.mgrId,
//         response.mgrEmail,
//         response.mgrOffice
//       );
//       console.log(newManager);
//       console.log(newManager.role);
//       employees.push(newManager);
//       menu();
//     });
// }

// function menu() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         message: "Do you want to add more employees?",
//         choices: ["Engineer", "Intern", "Done"],
//         name: "choice",
//       },
//     ])
//     .then((response) => {
//       if (response.choice == "Engineer") {
//         // ask questions about engineer the same way that we asked about manager
//       } else if (response.choice == "Intern") {
//         //ask questions about intern the same way that we asked about manager
//       } else {
//         //when we're done, create a big string as a syntax for HTML
//         htmlSyntax(employees);
//         //and after that use fs.writefile to create the new HTML
//       }
//       next();
//     });
//   other();
// }

// function next() {
//   inquirer
//     .prompt([
//       {
//         message: "What is the engineer's name?",
//         name: "engName",
//       },
//       {
//         message: "What is the engineer's id?",
//         name: "engId",
//       },
//       {
//         message: "What is the email?",
//         name: "engEmail",
//       },
//       {
//         message: "What is the github?",
//         name: "engGithub",
//       },
//     ])
//     .then((response) => {
//       // console.log(response)

//       const newEngineer = new Engineer(
//         response.engName,
//         response.engId,
//         response.engEmail,
//         response.engGithub
//       );
//       console.log(newEngineer);
//       console.log(newEngineer.role);
//       employees.push(newEngineer);
//       menu();
//     });
// }

// function other() {
//   inquirer
//     .prompt([
//       {
//         message: "What is the intern's name?",
//         name: "intName",
//       },
//       {
//         message: "What is the intern's id?",
//         name: "intId",
//       },
//       {
//         message: "What is the email?",
//         name: "intEmail",
//       },
//       {
//         message: "What is the school they attended?",
//         name: "intSchool",
//       },
//     ])
//     .then((response) => {
//       // console.log(response)

//       const newIntern = new Intern(
//         response.intName,
//         response.intId,
//         response.intEmail,
//         response.intSchool
//       );
//       console.log(newIntern);
//       console.log(newIntern.role);
//       employees.push(newIntern);
//       menu();
//     });
// }

// function htmlSyntax(employeeArray) {
//   let syntax = `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//     `;
//   for (i = 0; i < employeeArray.length; i++) {
//     if (employeeArray[i].role == "Manager") {
//       syntax += `
//             <h1>Manager name: ${employeeArray[i].name}</h1>
//             `;
//     }
//     //do the same for intern and for engineer
//     if (employeeArray[i].role == "Engineer") {
//       syntax += `
//             <h1>Engineer name: ${employeeArray[i].name}</h1>
//             `;
//     }
//     else if (employeeArray[i].role == "Intern") {
//       syntax += `
//         <h1>Intern name: ${employeeArray[i].name}</h1>
//         `;
//       syntax += `
//     </body>
//     </html>`;

//       createHtmlFile(syntax);
//     }
//   }
// }

// function createHtmlFile(syntax) {
//   fs.writeFile("index.html", syntax, (err) => {
//     if (err) throw err;
//   });
// }
startPoint();
