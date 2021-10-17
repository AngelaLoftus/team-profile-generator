const Intern = require('../lib/Intern');

//test can create new instance of intern

test("can create instance of intern", () => {
    const newIntern = new Intern('bert xiu', 4, 'bertxiu@gmail', 'UT Austin');

    expect(typeof (newIntern)).toBe("object");
})

//test can set school of intern

test("can set school of intern", () => {
    const newIntern = new Intern('bert xiu', 4, 'bertxiu@gmail', 'UT Austin');

    expect(newIntern.school).toBe('UT Austin');
})

//test can get school of intern from functino
test("can get the school of the intern", () => {
const newIntern = new Intern('bert xiu', 4, 'bertxiu@gmail', 'UT Austin');

    expect(newIntern.getSchool()).toBe("UT Austin");
});

//checks if the role of the employee is intern
test("getRole for intern returns the string intern", () => {
    const newIntern = new Intern('bert xiu', 4, 'bertxiu@gmail', 'UT Austin');

    expect(newIntern.getRole()).toBe("Intern");

});