// app.js

var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://<uname>:<pwd>@ds139322.blab.com:39322/aufinancex')
	.then(() => { // if all goes well:
		console.log('Start');
	})
	.catch(err => {
		console.error('App starting error: ', err.stack);
		process.exit(1);
	});

var itemRouter = require('./src/routes/itemRouter');

// Middlewares to set view engine and post json data to server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// app.get('/', function(request, response) {
// 	console.log('WASSUP...plz work');
// });

// app.listen(process.env.PORT || 4200);

app.listen(4200, function() {
	console.log('WASSUP BEAUTIFUL');
})