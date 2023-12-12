const express = require("express");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv").config();
const port = 5050;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

app.listen(port, () => console.log("Le serveur a démarré au port" + port));
