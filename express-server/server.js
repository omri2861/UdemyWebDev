const express = require("express");
const bodyParser = require("body-parser");

const serverPort = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", (req, res) => {
  let result = Number(req.body.num1) + Number(req.body.num2);  
  res.send("The result is: " + result);
});

app.listen(serverPort, () => {
    console.log(
        "Server has started on port " +
            serverPort +
            ", directory " +
            __dirname +
            "."
    );
});
