var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

//only one line
var tasks = require('./routes/tasks')

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)

//only one line
app.use('/api', tasks)

var server = app.listen(port, function() {
  console.log('Server is running on port: ' + port);
  //server.close(function() { console.log('Doh :('); });
});

