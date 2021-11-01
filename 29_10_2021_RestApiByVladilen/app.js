const express = require("express");
const path = require("path");
const app = express(); //создается приложение

//-----------------------------
//это нужно хранить винизу так как эти запросы должны отрабатываться последними

//обозначаем статическую папку если этого не
//делать то frontend.js который запускается с index.html не найдется
app.use(express.static(path.resolve(__dirname, "client")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", index.html));
});

app.listen(3000, () => {
  console.log("Server has been started on port 3000...");
}); //запускаем сервер
