const Manager = require('../lib/Manager');

//test can create new instance of manager

test("can create instance of manager", () => {
    const newManager = new Manager('steve carrell', 7, 'stevecarrell@gmail', 105);

    expect(typeof (newManager)).toBe("object");
});

//test can set office number of manager

test("can set office number of manager", () => {
    const newManager = new Manager('steve carrell', 7, 'stevecarrell@gmail', 105);

    expect(newManager.officeNumber).toBe(105);
});

//test can get office number of manager from function
test("can get the office number of the manager", () => {
    const newManager = new Manager('steve carrell', 7, 'stevecarrell@gmail', 105);

    expect(newManager.getOfficeNumber()).toBe(105);
});

//checks if the role of the employee is manager
test("getRole for manager returns the string manager", () => {
    const newManager = new Manager('steve carrell', 7, 'stevecarrell@gmail', 105);

    expect(newManager.getRole()).toBe("Manager");
});