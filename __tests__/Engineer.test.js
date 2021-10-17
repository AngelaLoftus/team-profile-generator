const Engineer = require('../lib/Engineer');

//test can create new instance of engineer

test("can create instance of Engineer", () => {
    const newEngineer = new Engineer('john mitchell', 10, 'johnmitchell@gmail', 'jmitchell@github');

    expect(typeof (newEngineer)).toBe("object");
})

//test can set github of engineer

test("can set github of engineer", () => {
    const newEngineer = new Engineer('john mitchell', 10, 'johnmitchell@gmail', 'jmitchell@github');

    expect(newEngineer.github).toBe('jmitchell@github');
})

//test can get github of engineer from functino
test("can get the github of the engineer from function", () => {
    const newEngineer = new Engineer('john mitchell', 10, 'johnmitchell@gmail', 'jmitchell@github');

    expect(newEngineer.getGithub()).toBe("jmitchell@github");
});

//test can return correct role of engineer (not employee)
test("can return the correct role of the engineer as engineer", () => {
    
    const newEngineer = new Engineer('john mitchell', 10, 'johnmitchell@gmail', 'jmitchell@github');

    expect(newEngineer.getRole()).toBe('Engineer');
});