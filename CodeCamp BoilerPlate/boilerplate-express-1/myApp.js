var bodyParser = require('body-parser');
var express = require('express');
var app = express();
 

app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
 
  next();
});
 

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
 

console.log("Hello World");
 

app.get("/", (req, res) => {
  res.send("Hello Express");
});
 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
 

app.use(express.static(__dirname + "/public"));
 

app.get("/json", (req, res) => {
  res.json({
    "message": "Hello json"
  });
});
 

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "HELLO JSON";
  } else {
    response = "Hello json";
  }
 
  res.json({
    "message": response
  });
});
  

app.get('/now', (req, res, next) => {
  req.time = Date().toString();
  next();
}, (req, res) => {
  res.json({
    "time": req.time
  });
});
 

app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
 
  res.json({
    "echo": word
  });
});
 

app.get("/name", (req, res) => {
  const { first: firstName,  last: lastName} = req.query;
 
  res.json({
    name: `${firstName} ${lastName}`
  });
});
   

app.post('/name', (req, res) => {
  const { first: firstName,  last: lastName} = req.body;
 
  res.json({
    name: `${firstName} ${lastName}`
  });
});
 

 
 module.exports = app;