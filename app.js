const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Eat Fod","Buy Food"];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',(req, res) => {
    let today = new Date();
    let cd = today.getDay();
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    let day = today.toLocaleDateString("en-IN", options);
    
    res.render('list', {kindOfDay : day, newlistItems: items});
});

app.post('/',(req, res) => {
    let item = req.body.newItem;
    items.push(item)
    res.redirect("/");
})


app.listen(3000, (req,res) => {
    console.log("This is local server");
});