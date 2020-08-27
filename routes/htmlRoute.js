const path = require("path");

module.exports = function (app) {
  // RETURNS NOTES HTML FILE
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // DEFAULTS TO INDEX HTML FILE
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
