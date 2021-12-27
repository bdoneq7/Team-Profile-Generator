// Generate HTML
const renderHTML = require('./src/renderHtml');

// Include File System and Inquirer
const inquirer = require('inquirer');
const fs = require('fs');

// Include Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Array
const teamMembers = [];


// Ask User Questions
const promptUser = () => {
    return inquirer.prompt([ // Promise
            {
                type: 'input',
                name: 'teamManager', // key and user input
                message: 'Who is the Team Manager?',
                validate: teamManagerInput => {
                    if (teamManagerInput) {
                        return true;
                    } else {
                        console.log('Error: Please enter the Team Manager');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Please enter the Mananger ID',
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log('Error: Please enter the Manager ID');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter the Manager Email Address',
                validate: managerEmailInput => {
                    if (managerEmailInput) {
                        return true;
                    } else {
                        console.log('Error: Please enter the Manager Email Address');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the Manager Office Number',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('Error: Please enter the Manager Office Number');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'employeeType',
                message: 'Add Employee: Please enter the Employee Role',
                choices: ['Engineer', 'Intern'],
                    // If Engineer Selected, Prompt to Enter Engineer's Name, ID, Email, and Github Username
                    // Then taken back to the Menu

                    // If Intern Selected, Prompt to Enter Intern's Name, ID, Email, and School
                    // Then taken back to the Menu
            },
            {
                type: 'input',
                name: 'employeeName',
                message: 'Please enter the Employee Name',
                validate: employeeNameInput => {
                    if (employeeNameInput) {
                        return true;
                    } else {
                        console.log('Error: Please enter the Employee Name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'Please enter the Employee ID',
                validate: employeeIDInput => {
                    if (employeeIDInput) {
                        return true;
                    } else {
                        console.log('Error: Please enter the Employee ID');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'Please enter the Employee Email',
                validate: employeeEmailInput => {
                    if (employeeEmailInput) {
                        return true;
                    } else {
                        console.log('Error: Please enter the Employee Email');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeGithub',
                message: 'Please enter the Employee Github Username',
                validate: employeeGithubInput => {
                    if (employeeGithubInput) {
                        return true;
                    } else {
                        console.log('Error: Please enter the Employee Github Username');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'moreEmployees',
                message: 'Do you want to add more Employees? (Y/n)',
                validate: moreEmployeesInput => {
                    if (moreEmployeesInput) {
                        return true;
                    } else {
                        console.log('Error: Yes or No?');
                        return false;
                    }
                }
            },
            

        ]);
    };

    promptUser();