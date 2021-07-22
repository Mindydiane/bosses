/* name, id, email, getName(), getId(),
 getEmail, github//github username, get Github(),
 getRole()//returns Engineer*/
 class Engineer extends Employee {
    constructor(github){
       this.github = github; 
       this.role = 'engineer';
    }
    getGithub() {
        return this.github;
    }
}


