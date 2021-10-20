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
    
    `
  }

};
