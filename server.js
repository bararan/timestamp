var express = require("express");

var app = express();

app.get("/", function(req, res) {
    res.end("Maraba Televoli");
});

app.listen(8080);