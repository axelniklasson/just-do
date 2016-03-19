// Modules
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// Configs
var db = require('./config/db');

// Port
var port = process.env.PORT || 3000; 

// Connect to DB
// mongoose.connect(db.url);

// Setting up Express
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

// Routes
require('./app/routes')(app);

// Startup
app.listen(port);    

// Expose app
module.exports = app;