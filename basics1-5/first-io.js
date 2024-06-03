let fs = require("file");

let content = fs.readFileSync(process.argv[2]);
let line = content.toString().split("\n").length - 1

console.log(line);