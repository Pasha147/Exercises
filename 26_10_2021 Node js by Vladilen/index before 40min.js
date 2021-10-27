const chalk = require("chalk"); //подключение пакетов
const text = require("./data"); //подключение пакетов из своих файлов

console.log(chalk.blue("Hello Node"));
console.log(chalk.green(text));

// каждый модуль нода оборачивает в функцию с параметрами
//         (function(exports, require, module, __dirname, __filename))
//         эти параметры доступны
console.log("dirName>>>", __dirname);
console.log("fileName>>>", __filename);
