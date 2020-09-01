const express = require("express");

// const path = require("path");
const apiRoutes = require("./routes/apiRoutes.js");
const PORT = process.env.PORT || 3000;

const app = express();

// DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SHOWS CSS
app.use(express.static("public"));

// ROUTER MAP
app.use("/api", apiRoutes);

require("./routes/htmlRoute")(app);

// LISTENER
app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
