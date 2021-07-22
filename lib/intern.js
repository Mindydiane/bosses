/* name, id, email, getName(), getId(), getEmail()
school, getSchool(), getRole()//overriden to return 'intern' */
class Intern extends Employee {
    constructor(school){
        this.school = 'school';
        this.role = 'intern';
    }
    getSchool() {
        return this.school
    }
}