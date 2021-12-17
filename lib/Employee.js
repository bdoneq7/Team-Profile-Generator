class Employee { 

    constructor(name = '') {
        this.name = name;
        this.id = Number;
        this.email = String;
    }

    getName() {
        return {
            name: this.name
        };
    }

    getId() {
        return {
            id: this.id
        }
    }

    getEmail() {
        return {
            email: this.email
        }
    }

    getRole() {
        return {
            // returns 'Employee'
        }
    }

}

module.exports = Employee;