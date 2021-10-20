const Employee = require('../lib/Employee')

test("Does get name get getName()", () =>{
    const testValue= "Ted";
    const employeeName = new Employee(testValue, "1", "madison@");
    expect(employeeName.getName()).toBe(testValue);
})

test("Does it register an id", () => {
    const testID = '1';
    const empoyeeID = new Employee("David", testID, "madison@", "777-777-7777");
    expect(empoyeeID.getId()).toBe(testID);
})

test("Does it register an email", () => {
    const testEmail= "madison@gmail.com";
    const employeeEmail = new Employee("David", "1", testEmail, "777-777-7777");
    expect(employeeEmail.getEmail()).toBe(testEmail);
})