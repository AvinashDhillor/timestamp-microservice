// server.js
// where your node app starts
const fun = require('./src/fun.js');
// init project
const express = require('express');
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/:date_string', (req, res) => {
  let date = req.params.date_string;
  res.send(fun.check(date));
});

app.get('/api/timestamp/', (req, res) => {
  let today = new Date();
  res.send(fun.check(today.toString()));
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
