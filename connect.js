var mongoose = require("mongoose");
var info = requuire("./info");
var db = mongoose.connection;

db.on("error",console.error);
db.once("open",function(){
        //function
        });
mongoose.connect("mongodb://"+info.dbuser+":"+info.dbpw+"@ds037637.mongolab.com:37637/ebooking");
