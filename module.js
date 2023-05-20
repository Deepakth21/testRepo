//Commonjs, every file is module (by Default)
//Modules -Encapsulated code(only share minimum)

const names = require("./3-name");
const sayHi = require("./4-utils");
const data= require('./5-alternative')
require('./6-mind-grenade')

console.log(data)

sayHi(names.deepak);
sayHi(names.sanjeev);
sayHi("Aayush");
