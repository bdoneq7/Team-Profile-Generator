const Intern = require('../lib/Intern.js');

test('intern', () => {
    const intern = new Intern('Dave', 25, 'dave@email.com', 'UCF');

    expect(intern.school).toEqual(expect.any(String));
    
});