const Intern = require('../lib/Intern.js');

test('intern', () => {
    const intern = new Intern('intern');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getRole).toBe('Intern');
});