const Employee = require('./Employee');
class Intern extends Employee { 

    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.school = school;
    }

    getSchool() {
        return {
            school: this.school
        }
    }

    getRole() {
        return {
            // Overriden to return 'Intern'
        };
    }

}

module.exports = Intern;