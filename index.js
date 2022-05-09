const fs = require('fs');
const questions = require('./src/questions');
const webstrings = require('./src/createHTML');

var employees;

const init = async function () {
    employees = await questions.getEmployees();
    fs.writeFile('./dist/index.html', webstrings.createHTMLString(employees), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

init();