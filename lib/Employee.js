// TODO: Write code to define and export the Employee class

// Create class out of this

// * The first class is an `Employee` parent class with the following properties and methods:       
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`  

class Employee {
    constructor(name, id, email, userRole) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.userRole = userRole;
    }
}
Employee.prototype.getName = function () {

    return this.name;

}
Employee.prototype.getId = function () {
    return this.id;

}
Employee.prototype.getEmail = function () {

    return this.email;
}
Employee.prototype.getRole = function () {
    return this.userRole;
}


module.exports = Employee;

// Rest of classes i.e. Engineer.js, Intern.js manager.js  will extend `Employee`. 