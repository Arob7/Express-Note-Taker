// LOADS DATA FROM INDEX
const fs = require("fs");
const router = require("express").Router();
const path = require("path");
// let note = data;

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
router.get("/notes", function (req, res) {
  // let data = JSON.parse(
  fs.readFileSync("./db/db.json", "utf8", function (error, data) {
    if (err) {
      throw err;
    }
    let note = JSON.parse(data);
  });
});

// SEND REQUEST TO DATABASE AND GET RESPONSE HERE -SAYS NOTE IS NOT DEFINED IN TERMINAL
router.post("/notes", function (req, res) {
  let note = JSON.parse(data);
  let request = req.body;
  note.push(request);
  newDb();
});

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
router.delete("/api/notes/:id", function (req, res) {
  const id = req.params.id;
  for (let note of db) {
    if (id === note.id) {
      const noteIndex = db.indexOf(note);
      db.splice(noteIndex, 1);
      fs.writeFile(filePath, JSON.stringify(db), (err) => {
        if (err) throw err;
        console.log("Note deleted");
      });
      res.end();
    }
  }
});

module.exports = router;
