var express = require('express');
var app = express();
var path = require('path');
let fs = require('fs');



app.get('/', function(req, res)  {

  if (req.query.message){
    fs.appendFileSync('messages.html',`<div class="message">${req.query.message}</div>\n`);
    }
  

  let top = fs.readFileSync('top.html')
  let messages = fs.readFileSync('messages.html')
  let bottom = fs.readFileSync('bottom.html')
  res.send(top+messages+bottom);

});
  
  app.get('/messages',function(req,res){
    res.send(fs.readFileSync('messages.html'));
  });

  app.get('/delete-all-messages',function(req,res){
    fs.writeFileSync('messages.html',"")
    res.send('deleted');
  });



app.listen(8080);