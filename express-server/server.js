const express = require("express");
const bodyParser = require("body-parser");

const serverPort = 3000;

const app = express();

function calculateBmi(weight, height) {
  return weight / Math.pow(height, 2);
}


function bmiCalculator (weight, height) {
  let bmi = calculateBmi(weight, height);
  
  if (bmi < 18.5) {
      return "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi > 18.5 && bmi < 24.9) {
      return "Your BMI is " + bmi + ", so you have a normal weight.";
  } else if (bmi > 24.9) {
      return "Your BMI is " + bmi + ", so you are overweight.";
  }
}


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", (req, res) => {
  let result = Number(req.body.num1) + Number(req.body.num2);  
  res.send("The result is: " + result);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", (req, res) => {
  let w = Number(req.body.weight);
  let h = Number(req.body.height);
  res.send(bmiCalculator(w, h));
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
