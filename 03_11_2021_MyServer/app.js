const express = require("express");
const path = require("path");

const app = express();

// это всё код middleware
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", "*"); // разрешает принимать запросы со всех доменов
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // какие методы в запросах разрешается принимать
  next();
});

app.get("/api/data", (req, res) => {
  console.log("server>>");
  //   console.log("req.params>>", req.params.id);
  //   console.log("req.body>>", req.body);
  let data = { a: 2, b: 4 };
  res.json(data);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.use(express.static(path.resolve(__dirname, "frontend")));

app.listen(3000, () => {
  console.log("Server has been started on port 3000...");
});
