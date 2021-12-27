const Engineer = require('../lib/Engineer.js');

test('engineer', () => {
    const engineer = new Engineer('engineer');

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getRole).toBe('Engineer');
});