const Manager = require('../lib/Manager');

test("Does it register the users school", () => {
    const testOffNumber= "215"
    const managerNum = new Manager("David", "1", "madison@", testOffNumber);
    expect(managerNum.getOfficeNumber()).toBe(testOffNumber);
})