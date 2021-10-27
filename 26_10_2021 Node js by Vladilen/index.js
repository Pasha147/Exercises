//====40:00 создание серверов===
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    //"Content-Type": "text/plain", //просто для текса
    "Content-Type": "text/html",
  });
  res.end("<h1>hello nodeJS!!!</h1>");
});

server.listen(3000, () => {
  console.log("server has been started...");
});
