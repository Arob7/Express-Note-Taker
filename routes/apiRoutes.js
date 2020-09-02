const fs = require("fs");
const router = require("express").Router();
const path = require("path");

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
router.get("/notes", function (req, res) {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (
    err,
    data
  ) {
    if (err) {
      return console.log(err);
    }
    res.json(JSON.parse(data));
  });
});

// SEND REQUEST TO DATABASE AND GET RESPONSE HERE
router.post("/notes", function (req, res) {
  const newNote = req.body;
  console.log(newNote);
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (
    err,
    data
  ) {
    if (err) {
      throw err;
    }
    console.log(data);
    var notes = JSON.parse(data);
    var lastIndex = notes.length - 1;
    console.log(lastIndex);
    var lastID = notes[lastIndex].id;
    var newId = lastID + 1;
    console.log(newId);
    newNote.id = newId;
    console.log(newNote);
    notes.push(newNote);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes),
      function (err) {
        if (err) throw err;
        res.json(notes);
      }
    );
  });
});

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
// router.delete("/notes", function (req, res) {
//   fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (
//     err,
//     data
//   ) {
//     if (err) {
//       throw err;
//     }
//     var notes = JSON.parse(data);
//     console.log(notes);
//     var lastIndex = notes.length - 1;
//     console.log(lastIndex);
//     var lastID = notes[lastIndex].id;
//     var newId = lastID + 1;
//     console.log(newId);
//     newNote.id = newId;
//     console.log(newNote);
//   });
// });
//
module.exports = router;
