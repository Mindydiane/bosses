const Manager = require('../lib/Manager');

test("Does it register the users school", () => {
    const testNumber= "777-777-7777"
    const managerNum = new Manager("David", "1", "madison@", testNumber);
    expect(managerNum.getOfficeNumber()).toBe(testNumber);
})