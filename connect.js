var mongoose = require("mongoose");
var info = requuire("./info");
var db = mongoose.connection;
var clientSchema = new mongoose.Schema({
        clientID: String,
        clientPW: String,
        email: String
});
var appointSchema = new appointSchema({
        doctorID: String,
        date: Date,
        Messages: String
});
var client = mongoose.model('client', clientSchema);
var appoint = mongoose.model('appoint',appointSchema);
db.on("error",console.error);
db.once("open",function(){
        //
        });
mongoose.connect("mongodb://"+info.dbuser+":"+info.dbpw+"@ds037637.mongolab.com:37637/ebooking");
