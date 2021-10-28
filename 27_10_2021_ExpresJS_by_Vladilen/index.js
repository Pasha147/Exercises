import express from "express";

//используется синтаксис с import а не с require
// поэтому переменную __dirname получаем по другому
import path from "path";

//если не дописать расширение js работать не будет
import { requestTime, logger } from "./middlewares.js";

//используется синтаксис с import а не с require
// поэтому переменную __dirname получаем по другому
const __dirname = path.resolve();

//в зависимости от того где запускаем сервер может понадобиться
// разный порт. process - глобальная переменная в ноде
// берет PORT или в process.env если есть или если нет то 3000
const PORT = process.env.PORT ?? 3000;
// по правилам экспресса нужно проинициализировать приложение
const app = express();

//концепт middlewear
//представляет из себя функции которые можеп по разному комбинировать
//их можно создавать и добавлять в экспресс

//после этого сервер автоматом заходит в static и ищет index.html
//после этого не нужно прописывать все ответы, сервер будет это понимать по ссылкам
//автоматом ищет в static
app.use(express.static(path.resolve(__dirname, "static")));

//для использования миддлвея прописываем
app.use(requestTime); //функция не вызывается а передается
app.use(logger);

//23:45 после создания static удаляем
/*
//обработать гет запрос по урле "/"
//Второй параметр можно и function, не обязательно стрелочную
// в ноде req, res просто объекты. Експр добавляет к ним функционал
app.get("/", (req, res) => {
  //16:20 express добавляет хедеры (базовую структуру, кодировку, тип html,...)
  //можно посмотреть в хроме в нетвоксе
  // res.send("<h1>Hello Express!!!</h1>");

  //17:40 для ответа файлом а не куском
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});
*/

//для перехода на features
//23:45 после создания static удаляем
/*app.get("/features", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "features.html"));
});*/

//21:30 обработка пути download
app.get("/download", (req, res) => {
  console.log("ReqTime>>", req.requestTime);
  res.download(path.resolve(__dirname, "static", "index.html"));
});

//метод который запускает сервер (базовый веб сервер)
app.listen(PORT, () => {
  console.log(`server has been started on port ${PORT}...`);
});
