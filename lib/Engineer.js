const Employee = require('./Employee')
class Engineer extends Employee { 

    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.github = github;
    }

    getGithub() {
        return {
            github: this.github
        }
    }

    getRole() {
        return {
            // Overriden to return 'Engineer'
        };
    }

}

module.exports = Engineer;