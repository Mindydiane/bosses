/* name, id, email, getName(), getId(), getEmail()
school, getSchool(), getRole()//overriden to return 'intern' */
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = 'school';
        this.role = 'Intern';
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;