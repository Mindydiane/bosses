const Intern = require('../lib/Intern');

test("Does it register the users school", () => {
    const testSchool= "University of Texas at Austin";
    const internSchool = new Intern("David", "1", "madison@", testSchool);
    expect(internSchool.getSchool()).toBe(testSchool);
})