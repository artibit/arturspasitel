var express = require("express");
var multer = require('multer');
var upload = multer();
var path = require("path");
var PORT = process.env.PORT || 3000;
var app = express();
var mysql = require("mysql2");

var http = require('http');
var server = http.Server(app);
app.post("/kek_action", upload.array(),function(request, response,next){
    console.log(request);
    console.log(request.body);
    console.log(request.body.name);
    connection.execute(
      "INSERT INTO keker(field-name-1,field-email,field-date,radio-group-1,field-name-4,field-name-2,se) VALUES (?,?,?,?,?,?,?)",
      [request.body.field-name-1, request.body.field-email,request.body.field-date,request.body.radio-group-1,request.body.field-name-4,request.body.field-name-2,request.body.se],
      function (err, results, fields) {
          console.log(results);
          console.log(fields);
          if (err) {
              return console.error("Ошибка: " + err.message);
          }
      }
  );
    return response.redirect("/form");
});

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

const connection = mysql.createConnection({
    host: "b4free.net",
    user: "artibit",
    database: "kekero",
    password: "spageti1842"
  });
  connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

app.use("/form",express.static(__dirname + '/public'), function(request, response){
     
    return response.render("form", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});
app.get("/", function(request, response){
     
    return response.send("Главная страница");
});
server.listen(PORT, function() {
});