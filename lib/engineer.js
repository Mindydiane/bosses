/* name, id, email, getName(), getId(),
 getEmail, github//github username, get Github(),
 getRole()//returns Engineer*/

 const Employee = require("./Employee");

 class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github; 
        this.role = 'Engineer';
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;

