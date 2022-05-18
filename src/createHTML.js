const createHTMLString = (employees) => {
    let employeeDivs = makeDivs(employees);
    var html =
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./css/style.css"/>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>

<body>
    <header class="p-3 mb-3 bg-primary text-white justify-content-center">
        <h1>Meet our team!</h1>
    </header>
    <section class="container py-5" id="team">
        <div class="row py-3 justify-content-center">
            ${employeeDivs}
        </div>
    </section>
</body>

</html>`;
    return html;
}

const makeDivs = (employees) => {
    let HTMLstring = '';
    let employeeString;
    let divTemplate =
        `<div class="col my-card">
    <div class="card mb-4 rounded-3 shadow-sm border-primary">
        <div class="card-header py-3 text-white bg-primary border-primary">
            <h1 class="card-title">NAME</h1>
            <h4 class="my-0 fw-normal">POSITION</h4>
        </div>
        <div class="card-body">
            <ul class="list-unstyled mt-3 mb-4">
                <li>ID</li>
                <li>EMAIL</li>
                <li>MISC</li>
            </ul>
        </div>
    </div>
</div>
    `;
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let icons = {
            'Manager': '<i class="fa-solid fa-hot-tub-person"></i>',
            'Engineer': '<i class="fa-solid fa-user-ninja"></i>',
            'Intern': '<i class="fa-solid fa-baby"></i>'
        }
        let role = employee.getRole();
        employeeString = divTemplate.replace('NAME', employee.getName());
        employeeString = employeeString.replace('POSITION', `${role} ${icons[role]}`);
        employeeString = employeeString.replace('ID', '<h3>ID: <span class="text-muted fw-light">' + employee.getId() + '</span></h3>');
        employeeString = employeeString.replace('EMAIL', `<h3>Email: <a class="text-primary fw-light" href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></h3>`);
        switch (role) {
            case 'Manager':
                employeeString = employeeString.replace('MISC', '<h3>Office number: <span class="text-muted fw-light">' + employee.getOfficeNumber() + '</span></h3>');
                break;
            case 'Engineer':
                employeeString = employeeString.replace('MISC', `<h3>Github: <a class="text-primary fw-light" href="http://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a></h3>`);
                break;
            case 'Intern':
                employeeString = employeeString.replace('MISC', '<h3>School: <span class="text-muted fw-light">' + employee.getSchool() + '</span></h3>');
                break;
        }
        HTMLstring += employeeString + '\n'
    }
    return HTMLstring;
}

exports.createHTMLString = createHTMLString;