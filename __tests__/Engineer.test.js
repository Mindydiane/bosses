const Engineer = require("../lib/Engineer");

test("Does it register the users GitHub", () => {
    const testUserName= "nightwing";
    const engineerUserName= new Engineer("David", "1", "madison@", testUserName);
    expect(engineerUserName.getGithub()).toBe(testUserName);
})