// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school, name, id, email) {
        super(name, id, email);
        this.school = school;
    }
}
Intern.prototype.getSchool = function () {
    return this.school;
}

Intern.prototype.getRole = function () {
    const EmployeeRole = 'Intern';
    return EmployeeRole;
}

Intern.exports = Intern;