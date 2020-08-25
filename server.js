const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8080;
const mainDir = path.join(__dirname, "/public");
