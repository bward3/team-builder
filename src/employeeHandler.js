const Engineer = require('../lib/engineer');
const Manager = require('../lib/manager');
const Intern = require('../lib/intern');

const makeEmployees = (employeeList) => {
    const output = [];
    let employeeInfo;
    let employeeObj;
    let type;
    for (let i = 0; i< employeeList.length; i++) {
        employeeInfo = employeeList[i];
        type = employeeInfo.type;
        switch (type) {
            case 'Manager':
                employeeObj = new Manager(
                    employeeInfo.name,
                    employeeInfo.id,
                    employeeInfo.email,
                    employeeInfo.officeNumber
                )
                break;
            case 'Engineer':
                employeeObj = new Engineer(
                    employeeInfo.name,
                    employeeInfo.id,
                    employeeInfo.email,
                    employeeInfo.github
                )
                break;
            case 'Intern':
                employeeObj = new Intern(
                    employeeInfo.name,
                    employeeInfo.id,
                    employeeInfo.email,
                    employeeInfo.school
                )
                break;
        }
        output.push(employeeObj);
    }
    return output;
}

exports.makeEmployees = makeEmployees;