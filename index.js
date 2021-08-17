//npm packages 
const inquirer = require("inquirer");
const fs = require("fs");

//importing classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// all employees data storage
const employees = [];

const questions = [
{
  type: "input",
  name: "id",
  message: "Enter Employee's ID: (*)"
},
{
  type: "input",
  name: "name",
  message: "Enter Employee's name: (*)"
},
{
  type: "input",
  name: "email",
  message: "Enter Employee's email address: (*)"
},
{
  type: "input",
  name: "id",
  message: "Select the ${'name} role: (*)"
}
]

function startPoint()
const startPoint =()=>
{
  inquirer.prompt(questions);
}
startPoint();
