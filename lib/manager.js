/* name, id, email, getName(), getId(), getEmail(),
office number, getRole()//override to return intern */
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
   getOfficeNumber() {
       return this.officeNumber
   }
   getRole() {
       return `Manager`;
   }
}

module.exports = Manager;