const express = require('express');
const path = require('path');

var app = express();
app.use(express.static(path.resolve(__dirname)));

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
});

app.get('/snake',(req,res)=>{
  res.sendFile(__dirname + '/snake game/snakeGame.html');
});

app.get('/tennis',(req,res)=>{
  res.sendFile(__dirname + '/tennis game/game.html');
});


var port = process.env.PORT || 3000;
app.listen(port,()=>{
console.log(`Listening on port ${port}.`);
});
