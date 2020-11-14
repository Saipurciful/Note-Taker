
const express = require("express");
const path = require("path");
const http = require("http");
const url = require("url");
const fs = require("fs");


    
    // Tells node that we are creating an "express" server
const app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX page
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
// app.get("/api/notes", function(req, res){
//     res.json(path.joint(__dirname, "db.json"));
// });

// app.post("/api/notes", function(req, res)){
//     res.sendFile(path.re)
// }




//    require("./routes/apiRoutes")(app);
//    require("./routes/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
    });
