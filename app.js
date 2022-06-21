const express = require('express');
const bodyParser = require('body-parser');
const port = (3000);

const app = express();
var items = ["Burger","Chicken", "Pizza", "Pasta"];
var itemsWork = [];

// Dung bodyParser lay du lieu tu form vao body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

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
    titles: day,
    listItem: items
  });   
});

app.post('/', function(req, res){
  var item = req.body.newItem;
  if(req.body.list === "Work List"){
    itemsWork.push(item);
    res.redirect('/work');
  }
  else{
    items.push(item);
    res.redirect('/');
  }
});


app.get('/work', function(req, res){
  res.render("list", {titles: "Work List", listItem: itemsWork});
}
);

app.post('/work', function(req, res){
  var item = req.body.newItem;
  itemsWork.push(item);
  res.redirect('/work');
}
);








