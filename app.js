const express = require("express");
const date = require(__dirname + "/date.js"); //dirname will tell the server that we are at current directory.

const app = express();

app.set("view engine", "ejs"); //in order to render the file as "ejs" format

app.use(express.urlencoded({extended: true})); // to access the value of req.body.xxx of the form submiited by the client
app.use(express.static("public")); // to serve the static file located in "public" directory. If not the server will only serve app.js(due to npm init tells it to).

const items =['buy food', 'eat food', 'cook food'];
const workItems = [];

app.get("/", function(req, res) {
    const day = date.getDate();

    res.render("list", {listTitle: day, newListItems:items});
})

app.post("/", function(req, res) {
    const item = req.body.newItem;
    if(req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems}); 
})

app.listen(3000, function() {
    console.log("server is listening to port 3000");
})
