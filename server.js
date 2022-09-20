const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at saurabh@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("Hi, I'm Saurabh and I'm learning Frontend development right now. I will be on the job market pretty soon");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Watching movies</li><li>Foodie</li></ul>");
});

app.listen(port, function(){
  console.log("Server started on port "+ port);
});
