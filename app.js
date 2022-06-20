const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js")

const app = express();
let items = ["Eat Fod","Buy Food"];
let workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',(req, res) => {
    let day = date.getDate();
    
    res.render('list', {listTitle : day, newlistItems: items});
});

app.post('/',(req, res) => {
    let item = req.body.newItem;
    if(req.body.list === "work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",(req, res) => {
    res.render("work",{listTitle: "Work List", newlistItems: workItems});
});


app.listen(3000, (req,res) => {
    console.log("This is local server");
});