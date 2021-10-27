const path = require("path");

console.log("the name of file>>", path.basename(__filename));
console.log("the name of the dir --->  ", path.dirname(__filename));
console.log("extansion of the file >>>  ", path.extname(__filename));
console.log("Parse:  ", path.parse(__filename));
console.log("Parse.name:  ", path.parse(__filename).name);
console.log(">>>>", path.join(__dirname, "server", "index.html"));
