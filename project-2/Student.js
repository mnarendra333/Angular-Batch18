"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(id, name, addr) {
        this.id = id;
        this.name = name;
        this.addr = addr;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAddr = function () {
        return this.addr;
    };
    return Student;
}());
exports.Student = Student;
