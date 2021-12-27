const Employee = require('../lib/Employee.js');

test('employee', () => {
    const employee = new Employee('employee');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});