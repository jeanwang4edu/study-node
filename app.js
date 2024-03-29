//load the needed  modules
var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');
    

var app = express();

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', routes.index);

// configure http server
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port '  + app.get('port'));
});



