//npm packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//importing classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// generating page
// const {writeFile, copyFile } = require('./utils/generate-site');
const generatePg = require('./src/page-template.js');
const { rejects } = require("assert");
const { resolve } = require("path");
const displayPg = path.resolve(__dirname, "dist");
const indexPath = path.join(displayPg, "index.html")

// all employees data storage
const teamArray = [];

const mgrQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "mgrName",
        message: "Please enter your name. (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter your name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "mgrId",
        message: "Please enter your ID Number. (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("You need to enter a ID Number!");
            return false;
          }
        },
      },

      {
        type: "link",
        name: "mgrEmail",
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
        name: "offNumber",
        message: "Please enter your office number(Required).",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("You need to enter a office number!");
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
}

// variable to create team w/inquirer prompt
const addMember = teamData => {
  console.log(`
======================
Add a New Team Member!
======================
`);
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Do you want to add an:",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((empChoice) => {
      if (empChoice.role === "Engineer") {
        promptEngineer();
      } else if (empChoice.role === "Intern") {
        promptIntern();
      } else {
        buildPg(teamArray);
      }
    });
}

// variable to prompt Engineer questions
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
        validate: (engineerIdInput) => {
          if (engineerIdInput) {
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
        name: "gitHub",
        message: "Enter the engineers GitHub username (Required)",
        validate: (engineerUsernameLink) => {
          if (engineerUsernameLink) {
            return true;
          } else {
            console.log("You need to enter a github username!");
            return false;
          }
        }
      },
      {
        type: "",
        name: "gitHub",
        message: "Enter the engineers GitHub username (Required)",
        validate: (engineerUsernameLink) => {
          if (engineerUsernameLink) {
            return true;
          } else {
            console.log("You need to enter a github username!");
            return false;
          }
        }
      }
    ]).then(engineerData => {
      buildTeam(engineerData)
    })
}

// confirm employee, would you like to add another team member?
const empConfirm = () => {    
  inquirer.prompt ([
    {
       type: "confirm",
       name: "confirmAddEmployee",
       message: "Would you like to add another team member?",
       default: false,
    }
   
  ]).then(confirmation => {
     
   if (confirmation.confirmAddEmployee) {
     addMember()
   } else {
     buildPg(teamArray);
   }
 
  })
 }

// prompt Intern w/inquirer
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
        validate: (internIdInput) => {
          if (internIdInput) {
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
    .then(internData => {
      buildTeam(internData)
    })
}



// build team functionality
const buildTeam = (empData) => {
  
  if (empData.mgrName) {
    manager = new Manager(empData.mgrName, empData.mgrId, empData.mgrEmail, empData.offNumber);
    manager.getRole();
    teamArray.push(manager)
  } else if (empData.engineerName) {
    engineer = new Engineer(empData.engineerName, empData.engineerId, empData.engineerEmail, empData.gitHub);
    engineer.getRole();
    teamArray.push(engineer)
  } else if (empData.internName) {
    intern = new Intern(empData.internName, empData.internId, empData.internEmail, empData.internSchool);
    intern.getRole();
    teamArray.push(intern)
  }
  // console.log(empConfirm());
  empConfirm();
}

mgrQuestions();

const buildPg = (teamArray) => {
  console.log(teamArray)
  if(!fs.existsSync(displayPg)){
    fs.mkdirSync(displayPg)
  }
  fs.writeFileSync(indexPath, generatePg(teamArray, "utf-8", err => {
    if(err){
      rejects(err);
      return;
    }
    resolve({
      ok:true,
      message: 'File Created'
    });
  }));
}


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
