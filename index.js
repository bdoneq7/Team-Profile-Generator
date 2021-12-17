const inquirer = require('inquirer');
// const {writeFile, copyFile} = require('./utils/generateMarkdown.js');
// const generatePage = require('./src/page-template.js');

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
                        console.log('Please enter the Team Manager');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'Please enter the Employee ID',
                validate: employeeIdInput => {
                    if (employeeIdInput) {
                        return true;
                    } else {
                        console.log('Please enter an Employee ID');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter an Email Address',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter an Email Address');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the Office Number',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter the Office Number');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'employeeType',
                message: 'Please enter Employee Type',
                choices: ['Engineer', 'Intern'],
                    // If Engineer Selected, Prompt to Enter Engineer's Name, ID, Email, and Github Username
                    // Then taken back to the Menu

                    // If Intern Selected, Prompt to Enter Intern's Name, ID, Email, and School
                    // Then taken back to the Menu
            },
            

        ]);
    };

    promptUser();