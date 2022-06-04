const express = require('express');
const bodyParser = require('body-parser');
const port = (3000);

const app = express();

app.set('view engine', 'ejs');

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
});

app.get('/', function(req, res){
    
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  if (currentDay == 0 || currentDay == 6) {
    day = "Weekend";
     
  } else {
    day = "Weekday";
  }

  res.render("list", {KindOfDay: day});   
});

