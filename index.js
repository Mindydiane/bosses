//npm packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// generating page
const generatePg = require("./src/page-template");
const displayPg = require(__dirname, "dist");
const indexPath = path.join(displayPg, "index.html");

//importing classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// all employees data storage
const teamArray = [];

const userQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter your name. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter the name of your employee!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter your ID Number. (Required)",
        validate: (identificationInput) => {
          if (identificationInput) {
            return true;
          } else {
            console.log("You need to enter a ID Number!");
            return false;
          }
        },
      },

      {
        type: "link",
        name: "managerEmail",
        message: "Please enter your email address. (Required)",
        validate: (emailLink) => {
          if (emailLink) {
            return true;
          } else {
            console.log("You need to enter a email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerPhone",
        message: "Please enter your phone number. (Required)",
        validate: (phoneInput) => {
          if (phoneInput) {
            return true;
          } else {
            console.log("You need to enter a phone number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      // teamArray.push(answers);
      buildTeam(answers);
    });
};

const createTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeSelection",
        message: "Do you want to add an:",
        choices: ["Engineer", "Intern", "No One"],
      },
    ])
    .then((employeeChoice) => {
      if (employeeChoice.employeeSelection === "Engineer") {
        promptEngineer();
      } else if (employeeChoice.employeeSelection === "Intern") {
        promptIntern();
      } else {
        buildPage(teamArray);
      }
    });
};
/**
 * collect an array of team members
 * inquire who is the manager?
 * create manager object
 * push to array of team members
 * inquire if they would like to add new team member
 *
 * if they choose no then create our team page with all members in the array
 *
 * if they choose yes then inquire what type of member they would like to add?
 *
 * if they choose engineer then inquire all data for engineer
 * create engineer object
 * push to array of team members
 * inquire if they would like to add new team member
 *
 * if they choose intern then inquire all data for intern
 * create intern object
 * push to array of team members
 * inquire if they would like to add new team member
 *
 */
