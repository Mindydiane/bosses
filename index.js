//npm packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//importing classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// generating page
const {writeFile, copyFile } = require('./utils/generate-site');
const generatePage = require('./src/page-template')
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html")

// all employees data storage
const teamArray = [];

const userQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter your name. (Required)",
        validate: nameInput => {
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
const createTeam = () => {
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
        choices: ["Engineer", "Intern", "No One"],
      },
    ])
    .then((employeeChoice) => {
      if (employeeChoice.role === "Engineer") {
        promptEngineer();
      } else if (employeeChoice.role === "Intern") {
        promptIntern();
      } else {
        buildPage(teamArray);
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
        name: "engineerGitHub",
        message: "What is engineers GitHub username? (Required)",
        validate: (engineerUsernameLink) => {
          if (engineerUsernameLink) {
            return true;
          } else {
            console.log("You need to enter a username!");
            return false;
          }
        }
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
    ]).then(engineerData => {
      buildTeam(engineerData)
    })
}

// confirm employee, would you like to add another team member?
const employeeConfirm = () => {    
  inquirer.prompt ([
    {
       type: "confirm",
       name: "confirmAddEmployee",
       message: "Would you like to add another team member?",
       default: false,
    }
   
  ]).then(confirmation => {
     
   if (confirmation.confirmAddEmployee) {
     createTeam()
   } else {
     buildPage(teamArray);
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
const buildTeam = (employeeData) => {
  // var { name, id, email, github, school } = employeeData;
  if (employeeData.managerName) {
    manager = new Manager(employeeData.managerName, employeeData.managerId, employeeData.managerEmail, employeeData.managerPhone);
    manager.getRole();
    teamArray.push(manager)
  } else if (employeeData.engineerName) {
    engineer = new Engineer(employeeData.engineerName, employeeData.engineerId, employeeData.engineerEmail, employeeData.engineerGitHub);
    engineer.getRole();
    teamArray.push(engineer)
  } else if (employeeData.internName) {
    intern = new Intern(employeeData.internName, employeeData.internId, employeeData.internEmail, employeeData.internSchool);
    intern.getRole();
    teamArray.push(intern)
  }
  console.log('teamArray', teamArray);
  employeeConfirm();
}

createTeam();

function init() {
//create the folder if he path doesn't exist
if(!fs.existsSync(OUTPUT_DIR)){
  fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath, render(emp), "utf-8")
}



// function writeToFile(fileName, data) {
//   console.log(fileName)
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/index.html', data, err => {
//       // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//       if (err) {
//         reject(err);
//         // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//           return;
//       }
  
//         // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//         resolve({
//           ok: true,
//           message: 'File created!'
//         });
//       });
//     });
//   };

// // TODO: Create a function to initialize app
// const buildPage = (teamArray) => {
//   writeToFile("index.html", templateData(teamArray));
// };

// userQuestions();

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
