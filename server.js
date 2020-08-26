const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// SETS INITIAL PORT
const PORT = process.env.PORT || 3000;
const mainDir = path.join(__dirname, "/public");

// DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// RETURNS NOTES HTML FILE
// app.get("/notes", function (req, res) {
//   res.sendFile(path.join(mainDir, "notes.html"));
// });

// RETURNS INDEX HTML FILE
// app.get("*", function (req, res) {
//   res.sendFile(path.join(mainDir, "index.html"));
// });
