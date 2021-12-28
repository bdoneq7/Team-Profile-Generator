const Engineer = require('../lib/Engineer.js');

test('engineer', () => {
    const engineer = new Engineer('Dave', 25, 'dave@email.com', 'bdoneq7');

    expect(engineer.github).toEqual(expect.any(String));
    
});