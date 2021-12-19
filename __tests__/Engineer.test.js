const Engineer = require('../lib/Engineer.js');

test('engineer', () => {
    const engineer = new Engineer('');

    expect(engineer.name).toBe('');
    expect(engineer.id).toBe(expect.any(Number));
    expect(engineer.email).toBe('');
    expect(engineer.github).toBe('');
});