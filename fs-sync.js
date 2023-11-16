const fs = require('fs');

const first = fs.readFileSync('./CONTENT/first.txt',"utf-8")
const second = fs.readFileSync('./CONTENT/second.txt',"utf-8")

console.log(first,second)
fs.writeFileSync('./CONTENT/result.txt',`here is the result : ${first},${second}`,{flag:'a'})