// 0x04-TypeScript/task_1/js/main.ts
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Class Implementation
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Test: Let's build a Teacher interface
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
// Test: Extending the Teacher class
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Test: Printing teachers
console.log(printTeacher("John", "Doe"));
// Test:Writing a class
var student = new StudentClass("Jane", "Doe");
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName()); // Jane
