const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

var items=["Buy Food", "Cook Food", "Eat Food"];
var workItems=[];

app.get("/", function(req, res){
    var day=date.getDay();
    
        res.render("list", {listTitle: day, newListItems: items});        
});

app.post("/",function(req, res){
    var item=req.body.task;

    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

    
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
    var item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});