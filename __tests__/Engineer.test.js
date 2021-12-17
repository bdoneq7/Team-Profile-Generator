const Engineer = require('../lib/Engineer.js');

test('engineer', () => {
    const engineer = new Engineer('Alec');

    expect(engineer.name).toBe('Alec');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('email@email.com');
    expect(engineer.github).toBe('github');
});