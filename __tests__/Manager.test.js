const Manager = require('../lib/Manager.js');

test('manager', () => {
    const manager = new Manager('manager');

    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole).toBe('Manager');
});