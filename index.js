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
  message: "Enter Employee's ID: (*)",
  validate: validId => {
    if (validId) {
      let id = parseInt(validID);
      if (Number.isInteger(id)) {
        return true;
      }
      else {
        console.log("ID must be 0-9 digits only");
        return false;
      }
    }
  }
},
{
  type: "input",
  name: "name",
  message: "Enter Employee's name: (*)",
  validate: validName => {
    if (validName) {
      let letters = /^[A-Z a-z]+$/;
      if (validName.match(letters)) {
        return true;
      }
      else {
        console.log("Name should have alphabet letters only")
        return false;
      }
    }
    else {
      console.log("Employee's name is required");
    }
  }
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
