//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent =
    "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
    "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
    "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

var posts = [
  {title: "Day 1", body: "This is the first post of the website! How great! I'm so excited that the site is running so well :) "},
  {title: "Day 2", body: "This is the peak of my development process! Everything goes great and the exercises are easy..."},
  {title: "Day 3", body: "Stuff are getting a little trikcy... but no matter, I guess the syntax is just kinda weird..."},
  {title: "Day 4", body: "Everything is cancer! I hate this... Why did I decide to become a web developer??"},
  {title: "Day 5", body: "I'm done with the development. It works. Don't talk to me, ever again."},
];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    res.render("home", { homeContent: homeStartingContent, posts });
});

app.get("/contact", (req, res) => {
    res.render("contact", { contactContent });
});

app.get("/about", (req, res) => {
    res.render("about", { aboutContent });
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/compose", (req, res) => {
    posts.push({ body: req.body.postBody, title: req.body.postTitle });
    res.redirect("/home");
});

app.get("/post/:num", (req, res) => {
  let postNum = parseInt(req.params.num);
  if (isNaN(postNum) || (1 > postNum  || postNum > posts.length)) {
    // TODO: 404 page
    res.send("Not Found");
    return;
  }
  res.render("post", {post: posts[postNum - 1]});
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
