//npm packages
const inquirer = require("inquirer");
//importing classes
const Employee = require("./lib/employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// generating page
const { writeFile, copyFile } = require("./utils/generate-site");
const generatePage = require("./src/page-template");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html")

// all employees data storage
const teamArr = [];

// start employee questions
const empQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Please enter your managers name. (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter the name you managers name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "empId",
    message: "Please enter your ID Number. (Required)",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("You need to enter your ID Number!");
        return false;
      }
    },
  },
  {
    type: "link",
    name: "empEmail",
    message: "Please enter your email address. (Required)",
    validate: (emailLink) => {
      if (emailLink) {
        return true;
      } else {
        console.log("You need to enter your email address!");
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
        console.log("Enter 0 if you do not have a office number");
        return false;
      }
    },
  },
];

// add a new team memeber
const addMember = {
  //   console.log(`
  // ======================
  // Add a New Team Member!
  // ======================
  // `);

  type: "list",
  name: "newEmp",
  message: "Do you want to add a member to your team?:",
  choices: ["Yes", "No"],
};

const newRole = {
  type: "list",
  name: "memberRole",
  message: "Select the role of the new team member:",
  choices: ["Engineer", "Intern"],
};

// variable to prompt Engineer questions
const promptEngineer = [
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
    type: "input",
    name: "github",
    message: "Enter the engineers GitHub username (Required)",
    validate: (engineerUsernameLink) => {
      if (engineerUsernameLink) {
        return true;
      } else {
        console.log("You need to enter a github username!");
        return false;
      }
    },
  },
];

// prompt Intern w/inquirer
const promptIntern = [
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
];

function init() {
  promptMgr();
}

// function to initialize mgr questions
function promptMgr() {
  inquirer.prompt(empQuestions).then((response) => {
    let mgr = new Manager(
      response.managerName,
      response.empId,
      response.empEmail,
      response.offNumber
    );
    teamArr.push(mgr);
    console.log(mgr);
    initMember();
  });
}

// function to ask for a new team member
function initMember() {
  inquirer.prompt(addMember).then((newEmp) => {
    if (newEmp.newEmp === "Yes") {
      loopQuestions();
    }
    if (newEmp.newEmp === "No") {
      writeToFile("index.html", generatePage(teamArr));
      console.log("Your team has been created!!");
    }
  });
}

// // build team functionality
// const buildTeam = (empData) => {
//   if (empData.managerName) {
//     employee = new Employee(
//       empData.managerName,
//       empData.empId,
//       empData.empEmail,
//       empData.offNumber
//     );
//     employee.getRole();
//     teamArr.push(employee);
//   } else if (empData.engineerName) {
//     engineer = new Engineer(
//       empData.engineerName,
//       empData.engineerId,
//       empData.engineerEmail,
//       empData.engineerGitHub
//     );
//     engineer.getRole();
//     teamArr.push(engineer);
//   } else if (empData.internName) {
//     intern = new Intern(
//       empData.internName,
//       empData.internId,
//       empData.internEmail,
//       empData.internSchool
//     );
//     intern.getRole();
//     teamArr.push(intern);
//   }
//   // console.log(empConfirm());
//   empConfirm();
// };

// // addMember();

// empQuestions()
//   .then(addMember)
//   .then((teamData) => {
//     return generatePage(teamData);
//   })
//   .then((pageHTML) => {
//     return writeFile(pageHTML);
//   })
//   .then((writeFileResponse) => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then((copyFileResponse) => {
//     console.log(copyFileResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function init() {
// //create the folder if he path doesn't exist
// if(!fs.existsSync(OUTPUT_DIR)){
//   fs.mkdirSync(OUTPUT_DIR)
// }
// fs.writeFileSync(outputPath, render(emp), "utf-8")

// }

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
