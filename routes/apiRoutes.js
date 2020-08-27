// LOADS DATA FROM INDEX
// const dbNotes = require("../db/store");
const fs = require("fs");
const router = require("express").Router();
const path = require("path");
// GETS API REQUEST

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
// Going to set this to listen on '/api/notes' by using app.use('/api',apiRoutes) in server.js
router.get("/notes", function (req, res) {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (
    error,
    data
  ) {
    if (error) {
      return console.log(error);
    }
    console.log(data);
    console.log(typeof data);

    res.json(JSON.parse(data));
  });
});

// SEND REQUEST TO DATABASE AND GET RESPONSE HERE
// router.post("path", function (req, res) {
//   const request = req.body;
// });
//   .then(function (response) {
//     res.json(response);

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

module.exports = router;
