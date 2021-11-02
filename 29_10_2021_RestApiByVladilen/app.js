const express = require("express");
const { request } = require("http");
const path = require("path");
const { v4 } = require("uuid");
const app = express(); //создается приложение

let CONTACTS = [{ id: v4(), name: "Pasha", value: "123", marked: false }];

//для работы с json
app.use(express.json());

//GET
app.get("/api/contacts", (req, res) => {
  setTimeout(() => {
    res.status(200).json(CONTACTS);
  }, 1000);
});

//POST
app.post("/api/contacts", (req, res) => {
  console.log("req.body>>", req.body);
  const contact = { ...req.body, id: v4(), marked: false };
  CONTACTS.push(contact);
  res.status(201).json(contact);
});

//DELETE
//:id динамический параметр
app.delete("/api/contacts/:id", (req, res) => {
  CONTACTS = CONTACTS.filter((c) => c.id !== req.params.id);
  res.status(200).json({ message: "contact has been deleted" });
});

//PUT
app.put("/api/contacts/:id", (req, res) => {
  //   console.log("PUT req", req.params);
  const idx = CONTACTS.findIndex((c) => c.id === req.params.id);
  CONTACTS[idx] = req.body;
  res.json(CONTACTS[idx]);
});

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
