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
    validate: (validId) => {
      if (validId) {
        let id = parseInt(validID);
        if (Number.isInteger(id)) {
          return true;
        } else {
          console.log("Must be 0-9 digits only");
          return false;
        }
      }
    },
  },
  {
    type: "input",
    name: "name",
    message: "Enter Employee's name: (*)",
    validate: (validName) => {
      if (validName) {
        let letters = /^[A-Z a-z]+$/;
        if (validName.match(letters)) {
          return true;
        } else {
          console.log("Name should have alphabet letters only");
          return false;
        }
      } else {
        console.log("Employee's name is required");
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter Employee's email address: (*)",
    validate: (validEmail) => {
      if (validEmail) {
        //string@anystring.any string S
        let email = /\S+@\S+\.\S+/;
        if (validEmail.match(email)) {
          return true;
        } else {
          console.log("Invalid Emaill Address");
        }
      } else {
        console.log("Email is required!");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "role",
    message: "Select the Employee's role: (*)",
    choices: ["Engineer", "Manager", "Intern"],
  },
];

const managerQuestions = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "officeNumber",
      message: "Enter manager's office number",
      validate: (validOffiNumber) => {
        if (validOffiNumber) {
          let num = parseInt(validOffiNumber);
          if (Number.isInteger(num)) {
            return true;
          } else {
            console.log("Must be 0-9 digits only");
            return false;
          }
        } else {
          console.log("Office Number is required!");
          return false;
        }
      },
    },
  ]);
};

const engineerQuestions = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Enter Engineer's Github Username",
      validate: (validGithub) => {
        if (validGithub) {
          return true;
        } else {
          console.log("Github Username is Required!");
          return false;
        }
      },
    },
  ]);
};

const internQuestions = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "Enter Intern's School Name",
      validate: (validIntern) => {
        if (validIntern) {
          let letters = /^[A-z a-z]+$/;
          if (validIntern.match(letters)) {
            return true;
          } else {
            console.log("School Name should have Alphabet letters Only");
            return false;
          }
        } else {
          console.log("Intern's school name is required!");
          return false;
        }
      },
    },
  ]);
};

const startPoint = () => {
  inquirer.prompt(questions);
};
startPoint();
