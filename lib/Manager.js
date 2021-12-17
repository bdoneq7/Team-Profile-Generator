const Employee = require('./Employee');

class Manager extends Employee { 

    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return {
            // Overriden to return 'Manager'
        };
    }

}

module.exports = Manager;