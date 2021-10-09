// //generate html 
// const {writeFile, copyFile } = require('./')

//npm packages
const inquirer = require("inquirer");

//importing classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


// all employees data storage
const emp = [];

const questions = [
  {
    type: "input",
    name: "id",
    message: "Enter Employee's ID: (*)",
    
  },
];

const mgrQuestions = () => {
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

// const engQuestions = () => {
//   inquirer.prompt([
//     {
//       type: "input",
//       name: "github",
//       message: "Enter Engineer's Github Username",
//       validate: (validGithub) => {
//         if (validGithub) {
//           return true;
//         } else {
//           console.log("Github Username is Required!");
//           return false;
//         }
//       },
//     },
//   ]);
// };

// const internQuestions = () => {
//   inquirer.prompt([
//     {
//       type: "input",
//       name: "school",
//       message: "Enter Intern's School Name",
//       validate: (validIntern) => {
//         if (validIntern) {
//           let letters = /^[A-z a-z]+$/;
//           if (validIntern.match(letters)) {
//             return true;
//           } else {
//             console.log("School Name should have Alphabet letters Only");
//             return false;
//           }
//         } else {
//           console.log("Intern's school name is required!");
//           return false;
//         }
//       },
//     },
//   ]);
// };

const addEmp = () => {
  inquirer.prompt([{
    type: "list",
    name: "role",
    message: "Select the Employee's role: (*)",
    choices: ["Engineer", "Manager", "Intern"],
  }])
  .then((Employee) => {
    if (Employee.role == "Manager") {
      mgrQuestions();
    } else if (Employee.role == "Engineer") {
      engQuestions();
    } else if (Employee.role == "Intern") {
      internQuestions();
    }
  });
};

const promptNextTeamMember = () => {
  inquirer
  .prompt({
    type: "confirm",
    name: "AddEmployee",
    message: "Would you like to add more employees? (*)",
  })
  .then(function (response) {
    if (response.AddEmployee === true) {
      addEmp();
    } else {
      console.log("write html");
    }
  });
}

const run = () => {
  inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Manager's name?"
    },
    {
     type: "input",
     name: "id",
     message: "What is the Manager's id number?" 
    },
    {
      type: "input",
      name: "email",
      message: "What is the email address?"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the office number?"
    }
  ])
  .then(input => {
    // console.log(input);
    const manager = new Manager(input.name, input.id, input.email, input.officeNumber)
    // console.log(manager);
    emp.push(manager)
    console.log(emp);
    promptNextTeamMember();
  })
 
};

run();


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