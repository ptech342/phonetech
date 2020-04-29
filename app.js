const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(express.static("public"));

//submit and make sure data has hit this route  and you should see the phone number
app.post("/api", (req, res, next) => {
  console.log(req.body);
});

app.listen(5000);
console.log("server has loaded on port 5000");
