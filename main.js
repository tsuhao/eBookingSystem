var http = require("http");
var DAO = require("DAO");
var qs = require("querystring");
var url = require("url");

var reqID = 0;

function serverCore(req, resp){
  cosole.log("ServerCore");
  try{
    reqID = reqID + 1;
    var dataObj = {
      id: reqID,
      req: req,
      resp: resp,
      data: null,
      ident: null
    };
    console.log(dataObj.id + ": " + req.method + " " req.url);
    
    if(req.method == "OPTIONS"){
      console.log("req.method is OPTIONS");
      resp.writeHead(
        200,{
          "Content-Type" : "text/plain",
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Max-Age" : "1000",
          "Access-Control-Allow-Headers" : "origin,x-csrftoken,content-type,accept"
        });
        resp.end("");
        return;
    }
    
    if(req.method != "POST"){
      dataObj.ident = req.url.substr(req.url.lastIndexOf("/")+1);
    }
    
    if(dataObj.indent != null){
      dataObj.ident = dataObj.ident.match(/^[a-f0-9]{24}$/i);
    }
    
    if(req.method == "GET" || req.method == "DELETE"){
      serverCore2(dataObj);
    }
    
    if(req.method == "POST" || req.method == "PUT"){
      var body = "";
      req.on("data",function(inData){
        body = body+inData;
      });
      
      req.on("end",function(){
        if(body == null){
          body ="";
        }
        dataObj.data = JSON.parse(body);
        serverCore2(dataObj);
      });
    }else{
      console.log(dataObj.id + ": Unsupported method: " + req.method);
      completeResponse(
        dataObj, 405, "text", "Unsupported method: " + req.method
      );
    }
    catch(e){
      console.log(dataObj.id + ": Exception processing request: " + e);
      completeResponse(dataObj, 500, "text", "Exception: " + e);
    }
  };
  
