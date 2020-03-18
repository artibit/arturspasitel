var express = require("express");
var multer = require('multer');
var upload = multer();
var path = require("path");
var PORT = process.env.PORT || 3000;
var app = express();
var mysql = require("mysql2");

var http = require('http');
var server = http.Server(app);

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
 
app.use("/form", function(request, response){
     
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