const Employee = require("./Employee");
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`



class Intern extends Employee {
    constructor(name, id, email, school, userRole) {
        super(name, id, email, userRole);
        this.school = school;
    }
}
Intern.prototype.getSchool = function () {
    return this.school;
}

module.exports = Intern;