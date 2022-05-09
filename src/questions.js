const inquirer = require('inquirer');
const handler = require('./employeeHandler');

const employeeType = () => {
    const question = [{
        name: 'type',
        type: 'list',
        message: 'Please choose the type of employee you would like to add to the team.',
        choices: ['Manager', 'Engineer', 'Intern']
    }];
    return inquirer.prompt(question);
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

const managerInfo = () => {
    const questions = [{
            name: 'name',
            type: 'input',
            message: 'Enter the project manager\'s name.',
            validate: function (value) {
                let done = this.async();
                if (value.length) {
                    done(true);
                    return;
                } else {
                    done('Please enter a valid name.');
                    return;
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter manager\'s id number.',
            validate: function (value) {
                let done = this.async();
                if (!isNaN(value)) {
                    done(true);
                    return;
                } else {
                    done('Please enter a valid id.');
                    return;
                }
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter manager\'s email address.',
            validate: function (value) {
                let done = this.async();
                if (value.includes('@') && value.includes('.')) {
                    done(true);
                    return;
                } else {
                    done('Not a valid email address.')
                    return;
                }
            }
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'Enter manager\'s office number.',
            validate: function (value) {
                let done = this.async();
                if (!isNaN(value)) {
                    done(true);
                    return;
                } else {
                    done('Please enter a valid office number.');
                    return;
                }
            }
        }
    ];
    return inquirer.prompt(questions);
}
const engineerInfo = () => {
    const questions = [{
            name: 'name',
            type: 'input',
            message: 'Enter the engineer\'s name.',
            validate: function (value) {
                let done = this.async();
                if (value.length) {
                    done(true);
                    return;
                } else {
                    done('Please enter a valid name.');
                    return;
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter engineer\'s id number.',
            validate: function (value) {
                let done = this.async();
                if (!isNaN(value)) {
                    done(true);
                    return;
                } else {
                    done('Please enter a valid id.');
                    return;
                }
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter engineer\'s email address.',
            validate: function (value) {
                let done = this.async();
                if (value.includes('@') && value.includes('.')) {
                    done(true);
                } else {
                    done('Not a valid email address.')
                    return;
                }
            }
        },
        {
            name: 'github',
            type: 'input',
            message: 'Enter engineer\'s Github username.',
            validate: function (value) {
                let done = this.async();
                if (value.length && !containsSpecialChars(value)) {
                    done(true);
                    return;
                } else {
                    done('Please enter a valid github username.');
                    return;
                }
            }
        }
    ];
    return inquirer.prompt(questions);
}
const internInfo = () => {
    const questions = [{
            name: 'name',
            type: 'input',
            message: 'Enter the intern\'s name.',
            validate: function (value) {
                let done = this.async();
                if (value.length) {
                    done(true);
                    return;
                } else {
                    done('Please enter a valid name.');
                    return;
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter intern\'s id number.',
            validate: function (value) {
                let done = this.async();
                if (!isNaN(value)) {
                    done(true);
                    return;
                } else {
                    done('Please enter a valid id.');
                    return;
                }
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter intern\'s email address.',
            validate: function (value) {
                let done = this.async();
                if (value.includes('@') && value.includes('.')) {
                    done(true);
                } else {
                    done('Not a valid email address.')
                    return;
                }
            }
        },
        {
            name: 'school',
            type: 'input',
            message: 'Enter intern\'s school name.',
            validate: function (value) {
                let done = this.async();
                if (value.length && !containsSpecialChars(value)) {
                    done(true);
                    return;
                } else {
                    done('Please enter a valid school.');
                    return;
                }
            }
        }
    ];
    return inquirer.prompt(questions);
}

const getEmployees = async () => {
    const employees = [];
    let addMore = true;
    let employee;
    let results;
    while (addMore) {
        results = await employeeType();
        switch (results.type) {
            case 'Manager':
                employee = await managerInfo();
                employee.type = 'Manager';
                break;
            case 'Engineer':
                employee = await engineerInfo();
                employee.type = 'Engineer';
                break;
            case 'Intern':
                employee = await internInfo();
                employee.type = 'Intern';
                break;
        }
        employees.push(employee);
        results = await inquirer.prompt([{
            name: 'continue',
            type: 'confirm',
            message: 'Would you like to enter another employee?'
        }]);
        addMore = results.continue;
    }
    let employeeObjects = handler.makeEmployees(employees);
    return employeeObjects; 
};

exports.getEmployees = getEmployees;