const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var items=["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function(req, res){
    var today=new Date();
    var options={
        weekday: "long",
        day:"numeric",
        month:"long"
    };

    var day=today.toLocaleDateString("en-US", options);
    
        res.render("list", {kindOfDay: day, newListItems: items});        
});

app.post("/",function(req, res){
    var item=req.body.task;

    items.push(item);

    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})