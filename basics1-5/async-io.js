let fs = require("fs")
let file = process.argv[2]

fs.readFile(file, function (error, content) {
    let lines = content.toString().split("\n").length - 1
    console.log(lines)
})