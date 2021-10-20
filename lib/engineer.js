/* name, id, email, getName(), getId(),
 getEmail, github//github username, get Github(),
 getRole()//returns Engineer*/

 const Employee = require("./Employee");

 class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = gitHub; 
    }
    getGithub() {
        return this.gitHub;
    }
    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;

