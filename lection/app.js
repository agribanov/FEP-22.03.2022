'use strict';

function Person(name) {
    this.name = name;
    this.age = 55;
}

Person.prototype.sayHi = function () {
    console.log('hello ' + this.name);
};

function Student(name) {
    this.name = name;
}

Student.prototype = new Person('Hacked');
Student.prototype.study = function () {
    console.log('I am studying');
};

function Magistr(name) {
    this.name = name;
    this.grant = 'Magistr';
}

Magistr.prototype = new Student();

const alice = new Person('Alice');

const alex = new Student('Alex');
const bob = new Student('bob');
const john = new Magistr('John');
