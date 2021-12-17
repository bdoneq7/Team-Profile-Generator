const Manager = require('../lib/Manager.js');

test('manager', () => {
    const manager = new Manager('');

    expect(manager.name).toBe('Jared');
    expect(maanger.officeNumber).toEqual(expect.any(Number));
});