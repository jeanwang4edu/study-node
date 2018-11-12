//load the http module
var http = require('http'),
    fs   = require('fs');

//configure the http server
http.createServer( (req, res) => {

    //read the content of file data.txt and output to server
    fs.readFile('data.txt', function readData(err,data) {
	res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    });

}).listen(3000, '0.0.0.0');

console.log("Server running at http://localhost:3000");
