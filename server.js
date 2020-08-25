const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8080;
const mainDir = path.join(__dirname, "/public");

// RETURNS NOTES HTML FILE
app.get("/notes", function (req, res) {
  res.sendFile(path.join(mainDir, "notes.html"));
});

// RETURNS INDEX HTML FILE
app.get("*", function (req, res) {
  res.sendFile(path.join(mainDir, "index.html"));
});
