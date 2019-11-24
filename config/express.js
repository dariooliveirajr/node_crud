var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');

module.exports = function(){
	var app = express();
	app.set('view engine','ejs');
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(express.static('public'));
	load('routes').into(app);
    load('routes').then('infra').into(app);
    return app; 
}

