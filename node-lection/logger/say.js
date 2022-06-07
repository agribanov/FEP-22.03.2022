const cow = require('cowsay');

module.exports = () => console.log(cow.say({ text: 'hello world!' }));
