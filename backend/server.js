const express = require("express");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = 5700;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/post", require("./routes/post.routes"));

app.listen(port, () => console.log("Le serveur a démarré au port" + port));
