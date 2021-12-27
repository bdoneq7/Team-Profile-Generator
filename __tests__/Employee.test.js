const Employee = require('../lib/Employee.js');

test('employee', () => {
    const employee = new Employee('');

    expect(employee.name).toBe('');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email@email.com');
});