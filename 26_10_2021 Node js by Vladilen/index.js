//====40:00 создание серверов===
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    //"Content-Type": "text/plain", //просто для текса
    "Content-Type": "text/html",
  });

  //   console.log("req.url>>", req.url);

  //51:00 ниже оптимизированный код
  /* if (req.url === "/") {
    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    });
  } else if (req.url === "/contact") {
    fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    });
  }*/
  //51:00 оптимизированный код
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // в случае если нет расширеия (расширение будет только у индекс)
  const ext = path.extname(filePath);
  let contentType = "text/html";

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    default:
      contentType = "text/html";
  }

  if (!ext) {
    filePath += ".html";
  }

  console.log("filePath>>", filePath);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

//можно считывать определенные параметры с консоли

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server has been started on ${PORT}...`);
});
