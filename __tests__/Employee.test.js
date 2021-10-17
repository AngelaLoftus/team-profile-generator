// test('gets the role of the employee') {
//     const newEmployee = Employee(...)


//     expect(..... to equal ....)
// }
const Employee = require('../lib/Employee')

//creates instance of EMPLOYEE

test("can create instance of artist", () => {
    const newEmployee = new Employee();
    //checking whether it is succesfully creating an object, ie. an employee
    expect(typeof(newEmployee)).toBe("object");
});


//can set employee name
test('can set name of employee', () => {
    const newEmployee = new Employee('bob', 90, 'bob@bob');

    expect(newEmployee.name).toBe('bob');
})

///can get employee name
test('can get name of employee from function', () => {
    const newEmployee = new Employee('bob', 80, "bob@bob");

    expect(newEmployee.getName()).toBe('bob', 80, 'bob@bob');
})


//test("can set id of employee"
test("can set id of employee", () => {
const newEmployee = new Employee('bob', 80, "bob@bob");

    expect(newEmployee.id).toBe(80);
})

//test("can get id of employee"

test("can get id of employee from function", () => {

    const newEmployee = new Employee('bob', 80, "bob@bob");

    expect(newEmployee.getId()).toBe(80);
})

//test("can set email of employee"
test("can set email of employee", () => {
    const newEmployee = new Employee('bob', 80, "bob@bob");
    
        expect(newEmployee.email).toBe('bob@bob');
    })
    
    //test("can get id of employee"
    
    test("can get email of employee from function", () => {
    
        const newEmployee = new Employee('bob', 80, "bob@bob");
    
        expect(newEmployee.getEmail()).toBe('bob@bob');
    })