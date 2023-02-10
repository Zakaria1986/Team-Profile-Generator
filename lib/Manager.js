const Employee = require('./Employee');
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
//       * `officeNumber`
//       * `getRole()`&mdash;overridden to return `'Manager'`

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email, role);

        this.officeNumber = officeNumber;
    }
}

Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber;
}

Manager.prototype.getRole = function () {
    return "Manager";
}

// prototype.getRole = function () {
//     return 'Employee';
// }
module.exports = Manager;