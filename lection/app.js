// Наследование
// Инкапсуялция
// Полиморфизм

// public
// private

'use strict';

// function Person(name) {
//     this._name = name;
//     this.age = 55;
// }

// Person.prototype.setName = function (name) {
//     if (name && typeof name === 'string') {
//         this._name = name;
//     }
// };

// Person.prototype.getName = function () {
//     return this._name;
// };
// Person.prototype._formatMessage = function () {
//     return 'hello ' + this._name;
// };

// Person.prototype.sayHi = function () {
//     console.log(this._formatMessage());
// };

// class Person {
//     constructor(name) {
//         this._name = name;
//         this._surname = 'Smith';
//     }

//     get fullname() {
//         return this._name + ' ' + this._surname;
//     }

//     set fullname(newName) {
//         if (!newName && typeof newName !== 'string') return newName;

//         const [name, surname] = newName.split(' ');

//         this._name = name;
//         this._surname = surname;
//     }

//     _formatMessage() {
//         return 'hello ' + this._name;
//     }

//     // setName(name) {
//     //     if (name && typeof name === 'string') {
//     //         this._name = name;
//     //     }
//     // }

//     // getName() {
//     //     return this._name;
//     // }

//     sayHi() {
//         console.log(this._formatMessage());
//     }
// }

// class Student extends Person {
//     _formatMessage() {
//         return 'Hello, I am student: ' + this._name + this.type;
//     }

//     study() {
//         console.log('I am studying');
//     }

//     sayHi() {
//         console.log('I am student');

//         super.sayHi();
//         super.sayHi();
//         super.sayHi();
//     }
// }

// Person.prototype.setName = function (name) {
//     if (name && typeof name === 'string') {
//         this._name = name;
//     }
// };

// Person.prototype.getName = function () {
//     return this._name;
// };

// function Student(name) {
//     this._name = name;
// }

// Student.prototype = new Person();
// Student.prototype._formatMessage = function () {
//     return 'Hello, I am student: ' + this._name;
// };

// Student.prototype.study = function () {
//     console.log('I am studying');
// };

// function Magistr(name) {
//     this._name = name;
// }

// // extend(Magistr, Person, Student);

// // extend(Student, Person);

// function extend(Child, ...Parents) {
//     Parents.forEach((Parent) => {
//         for (const key in Parent.prototype) {
//             Child.prototype[key] = Parent.prototype[key];
//         }
//     });
// }

// const alice = new Person('Alice');
// const alex = new Student('Alex');
// // const bob = new Magistr('bob');

// function greeting(obj) {
//     obj.sayHi();
// }
