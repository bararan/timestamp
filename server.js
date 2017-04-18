var express = require("express");

var app = express();

app.use(express.static(__dirname + '/views'));

app.get("/", function(req, res) {
    // res.end("Welcome to time server service!");
    res.render();
});

app.get("/:ts", function(req, res) {
    var date = new Date(req.params.ts);
    if (!date.getDate()) date = new Date(parseInt(req.params.ts) * 1000); //Multiply by 1000 as JS uses microseconds since epoch!
    var obj = {
        unix: date.getTime() / 1000||null, //Divide by 1000 for the same reason.
        natural: date.getTime() ? date.toDateString(): null
    };
    res.writeHead(200, {"type": "application/json"});
    res.end(JSON.stringify(obj));
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
