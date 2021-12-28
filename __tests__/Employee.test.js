const Employee = require('../lib/Employee.js');

test('employee', () => {
    const employee = new Employee('Dave', 25, 'dave@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});