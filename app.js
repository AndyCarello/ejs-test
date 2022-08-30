const express = require ("express"); 
const app = express ();
const path = require("path");
const EJS  = require('ejs');

app.engine('html', EJS.renderFile);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(8000, () => {
  console.log("Servidor iniciado")
});

app.get('/', function (req, res) {
  res.render('index.html', {title: 'Titulo como parametro'});
});
