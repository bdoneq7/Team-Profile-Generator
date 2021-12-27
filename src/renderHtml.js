// render Manager HTML
const renderManagerSection = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-warning">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// render Engineer HTML
const renderEngineerSection = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-success text-white">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github Profile: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// render Intern HTML
const renderInternSection = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-info">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// Place Employee Array Contents on HTML Page
renderHtml = (data) => {

    // Display Array for Roles on HTML Page
    displayArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') { // Render Manager Section
            const managerSection = renderManagerSection(employee);

            displayArray.push(managerSection);
        }

        if (role === 'Engineer') { // Render Engineer Section
            const engineerSection = renderEngineerSection(employee);

            displayArray.push(engineerSection);
        }

        if (role === 'Intern') { // Render Intern Section
            const internSection = renderInternSection(employee);

            displayArray.push(internSection);
        }
        
    }

    const employeeSection = displayArray.join('')

    const renderTeamProfile = renderHtmlFile(employeeSection); 
    return renderTeamProfile;
}

// render HTML File Contents
const renderHtmlFile = function (employeeSection) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Company Team Basic Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  </head>
  <body>
      <header>
          <nav class="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center text-dark fs-1 fw-bold text-primary">Company Team Basic Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center">
                  ${employeeSection}
              </div>
          </div>
      </main>
      
  </body>
  </html>
`;
}

// export to index
module.exports = renderHtml; 