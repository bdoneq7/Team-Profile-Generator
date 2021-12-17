const Intern = require('../lib/Intern.js');

test('intern', () => {
    const intern = new Intern('');

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('school');
});