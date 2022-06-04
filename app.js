const express = require('express');
const bodyParser = require('body-parser');
const port = (3000);

const app = express();
var item = '';

// Dung bodyParser lay du lieu tu form vao body
app.use(bodyParser.urlencoded({ extended: true }));

// Set template engine cho express bang embeded javascript ejs
app.set('view engine', 'ejs');

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
});

app.get('/', function(req, res){
    
  var today = new Date();
  var option = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  var day = today.toLocaleDateString('en-US', option);

  res.render("list", {
    day: day,
    listItem: item
  });   
});

app.post('/', function(req, res){
  item = req.body.newItem;
  res.redirect('/');
});


