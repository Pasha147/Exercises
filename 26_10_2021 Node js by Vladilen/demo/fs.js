const fs = require("fs"); //fs - file sistem
const path = require("path");

//===== 1 ======== создание папки
//асинхронный метод, есть еще синхронный. Поток в ноде один
//ПРАВИЛО когда работаем с асинхрон командами первый парам - ошибка
// когда ошибка есть, нужно ее обработать
/*
fs.mkdir(path.join(__dirname, "test"), (err) => {
  if (err) {
    throw err;
  }
  console.log("the folder is created");
});
*/

//===== 2 ======== создание файла
// writeFile может перетирать существующие файлы, при повторном запуске перетрет...
/*const filePath = path.join(__dirname, "test", "text.txt");
fs.writeFile(filePath, "Hello NOde JS!!!", (err) => {
  if (err) {
    throw err;
  }
  console.log("the file is created");
});
fs.appendFile(filePath, "\nHello again", (err) => {
  if (err) {
    throw err;
  }
  console.log("the file is created again");
});
*/

//===== 3 ======== 28:28 чтение с файла
const filePath = path.join(__dirname, "test", "text.txt");
//1способ-----------
/*fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err;
  }
  //нодф все читает в буферах, для перевода Buffer.from(c...
  const data = Buffer.from(content);
  console.log("Content>>>", data.toString());
});
*/
//2способ-----------
fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  console.log("Content------>", content);
});
