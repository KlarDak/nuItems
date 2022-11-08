const express = require("express");
const app = express();

const fs = require("fs");

const host = "127.0.0.1";
const port = 3005;

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/icons", express.static(__dirname + "/icons"));

app.get("/nuButtons", (req, res) => {
    fs.createReadStream("nuButtons.html").pipe(res);
});

app.get("/nuInputs", (req, res) => {
    fs.createReadStream("nuInputs.html").pipe(res);
});

app.listen(port, host, () => {
    console.log(`Server has been started! Address: http://${host}:${port}`);
});