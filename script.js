// complete this js code
// Define the Person class
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add the greet method to the Person prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Define the Employee class
function Employee(name, age, jobTitle) {
    // Call the Person constructor with the name and age parameters
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Set up inheritance from Person
Employee.prototype = Object.create(Person.prototype);

// Restore the constructor reference for Employee
Employee.prototype.constructor = Employee;

// Add the jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

