// variable to build team
const teamBuild = (team) => {
  const teamInfo = [];

  const generateManager = (manager) => {
    return `
    <div class="card bg-primary shadow p-1 mx-2 my-2" style="width: 18rem;">
      <div class="card-header text-white">
        <h3>${manager.name} </h3>
        <h4> <i class="fas fa-coffee"></i>  Manager</h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
    `;
  };

  const generateEngineer = (engineer) => {
    return `
    <div class="card bg-primary shadow p-1 mx-2 my-2" style="width: 18rem;">
      <div class="card-header text-white">
        <h3>${engineer.name}</h3>
        <h4><i class="fas fa-glasses"></i>  Engineer</h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
      </ul>
    </div> 
    `
  }

  const generateIntern = (intern) => {
    return `
    <div class="card bg-primary shadow p-1 mx-2 my-2" style="width: 18rem;">
      <div class="card-header text-white">
        <h3>${intern.name}</h3>
        <h4><i class="fas fa-user-graduate"></i>  Intern</h4>
      </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item"> Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item"> School: ${intern.school}</li>
        </ul>
      </div>
    </div>
    `
  }
  console.log(team)
const manager = team.filter(employee => employee.getRole() === 'Manager')
    teamInfo.push(manager.map(x => generateManager(x)))
    console.log(manager)
    
  //filter through team to find Engineers, call generateEngineer() function to map through filtered results and formulate a card for each and push to teamArray

  //filter through team to find Interns, call generateIntern() function to map through filtered results and formulate a card for each and push to teamArray
};
