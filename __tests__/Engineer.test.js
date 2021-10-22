const Engineer = require("../lib/Engineer");

test("Does it register the users github", () => {
    const testUserName= "nightwing";
    const engineerUserName= new Engineer("David", "1", "madison@", testUserName);
    expect(engineerUserName.getGitHub()).toBe(testUserName);
})