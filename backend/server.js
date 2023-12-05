const express = require("express");
const port = 5050;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

app.listen(port, () => console.log("Le serveur a démarré au port" + port));
