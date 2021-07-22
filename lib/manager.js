/* name, id, email, getName(), getId(), getEmail(),
office number, getRole()//override to return intern */

class manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = 'office number';
        this.role = 'manager';
    }
   getOfficeNumber() {
       return this.officeNumber
   }
}