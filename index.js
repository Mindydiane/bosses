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

const promptEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the engineer? (Required)",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("You need to enter the engineer name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the ID Number of the engineer? (Required)",
        validate: (engineerIdentificationInput) => {
          if (engineerIdentificationInput) {
            return true;
          } else {
            console.log("You need to enter the engineers ID Number!");
            return false;
          }
        },
      },
      {
        type: "link",
        name: "engineerEmail",
        message: "What is the email of the engineer? (Required)",
        validate: (engineerEmailLink) => {
          if (engineerEmailLink) {
            return true;
          } else {
            console.log("You need to enter a email address!");
            return false;
          }
        },
      },
      {
        type: "link",
        name: "engineerGitHub",
        message: "What is engineers GitHub username? (Required)",
        validate: (engineerUsernameLink) => {
          if (engineerUsernameLink) {
            return true;
          } else {
            console.log("You need to enter a username!");
            return false;
          }
        },
      },
      {
        type: "",
        name: "engineerGitHub",
        message: "What is engineers GitHub username? (Required)",
        validate: (engineerUsernameLink) => {
          if (engineerUsernameLink) {
            return true;
          } else {
            console.log("You need to enter a username!");
            return false;
          }
        },
      },
    ])
    .then((engineerData) => {
      buildTeam(engineerData);
    });
};

const employeeConfirm = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another team member?",
        default: false,
      },
    ])
    .then((confirmation) => {
      if (confirmation.confirmAddEmployee) {
        createTeam();
      } else {
        buildPage(teamArray);
      }
    });
};

const promptIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of the intern? (Required)",
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("You need to enter the intern name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "What is the ID Number of the intern? (Required)",
        validate: (internIdentificationInput) => {
          if (internIdentificationInput) {
            return true;
          } else {
            console.log("You need to enter the interns ID Number!");
            return false;
          }
        },
      },
      {
        type: "link",
        name: "internEmail",
        message: "What is the email of the intern? (Required)",
        validate: (internEmailLink) => {
          if (internEmailLink) {
            return true;
          } else {
            console.log("You need to enter a email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the interns school? (Required)",
        validate: (internSchoolInput) => {
          if (internSchoolInput) {
            return true;
          } else {
            console.log("You need to enter the schools name!");
            return false;
          }
        },
      },
    ])
    .then((internData) => {
      buildTeam(internData);
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
