// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
//       * `github`&mdash;GitHub username
//       * `getGithub()`
//       * `getRole()`&mdash;overridden to return `'Engineer'`

class Engineer extends Employee {

    constructor(name, id, email, github, userRole) {
        super(name, id, email, userRole);
        this.github = github;
    }
}
Engineer.prototype.getGithub = function () {
    return this.github;
}


module.exports = Engineer; 
