const Manager = require('../lib/Manager.js');

test('manager', () => {
    const manager = new Manager('Dave', 25, 'dave@email.com', 12);

    expect(manager.officeNumber).toEqual(expect.any(Number));
    
});