const path= require('path')
const absolute=path.resolve(__dirname)

console.log(absolute)

console.log(path.sep)

const filepath=path.join('content','subfolder','test.txt')
console.log(filepath)

const base =path.basename(filepath)

console.log(base)