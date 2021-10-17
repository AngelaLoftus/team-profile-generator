//class for employee to take in name, id and email and return these items
//returns Employee for description

class Employee {
    constructor(name,  id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        console.log('Employee');
        return 'Employee';
    }
}

module.exports = Employee;