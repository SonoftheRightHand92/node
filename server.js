const express = require('express');
const app = express();
const port = 3000;

// app.use(express.static("public"));

// app.set("views", "views");
// app.set("view engine", "ejs");

app.get("/", function(req, res) { 
    console.log("Received a request for /");
    
    res.write("This is the root.")
    res.end();
});

// app.get("/home", function(req, res) {
//     console.log("Received a request for the home page.");

//     var name = "John";
//     var emailAddress = "john@email.com";
//     var params = {username: name, email: emailAddress};
//     res.render("home", params);
// });

app.listen(port, function() {
    console.log("The server is up and listening on port 3000!");
});
