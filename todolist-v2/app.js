const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const _=require("lodash");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser:true});

const itemsSchema={
    name:String
};

const Item=mongoose.model("Item", itemsSchema);

const item1=new Item({
    name:"Welcome to your todolist!"
});

const item2=new Item({
    name:"Hit the + buttom to add a new item."
});

const item3=new Item({
    name:"<-- Hit this to delete an item."
});

const defaultItems=[item1, item2, item3];


const listSchema={
    name:String,
    items:[itemsSchema]
};

const List=mongoose.model("List", listSchema);



app.get("/", function(req, res){

    Item.find({}, function(err, results){
        if(results.length===0){
            Item.insertMany(defaultItems, function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("Successfully saved default items to DB.");
                }
            });
            res.redirect("/");
        }else{
            res.render("list", {listTitle: "Today", newListItems: results}); 
        }
      
    });
   })     

    

app.post("/",function(req, res){
    const itemName=req.body.task;
    const listName=req.body.list;

    const item=new Item({
        name: itemName
    });

    if(listName==="Today"){
        item.save();
        res.redirect("/");
    }else{
        List.findOne({name: listName}, function(err, foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/"+listName);
        })
    }

    
});

app.post("/delete", function(req, res){
    const removedItemId=req.body.checkbox;
    const listName=req.body.listName;

    if(listName==="Today"){
        Item.findByIdAndRemove(removedItemId, function(err){
            if(err){
                console.log(err);
            }else{
                console.log("Item removed successfully!");
            }
        })
        res.redirect("/");
    }else{
        List.findOneAndUpdate({name: listName},{$pull:{items:{_id: removedItemId}}}, function(err, foundList){
            if(!err){
                res.redirect("/"+listName);
            }
        });
    }
    
})

app.get("/:customListName", function(req , res){
    const customListName = _.capitalize(req.params.customListName);

    List.findOne({name: customListName}, function(err, foundList){
        if(!err){
            if(!foundList){
                //Create new list
                const list=new List({
                    name:customListName,
                    items:defaultItems
                });
                list.save();
                res.redirect("/");
            }else{
                //Show existing list
                res.render("list",{listTitle: foundList.name, newListItems: foundList.items})
            }
        }
    })

    
  });

app.post("/work", function(req, res){
    var item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});