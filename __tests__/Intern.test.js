const Intern = require('../lib/Intern.js');

test("Does it register the users school", () => {
    const testSchool= "UT at Austin";
    const internSchool = new Intern("David", "1", "madison@", testSchool);
    expect(internSchool.getSchool()).toBe(testSchool);
})