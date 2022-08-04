var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log("request made");

    // var myreadStream = fs.createReadStream(__dirname + '/note.txt', 'utf-8');
    // res.writeHead(200, { 'Content-Type': 'text/plain' });

    var myreadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });


    myreadStream.pipe(res);
    
});
server.listen(8000, '127.0.0.1',() => {
    console.log( "listening at 8000" );
})

//res is object of class OutgoingMesage which extends Stream.Writable class(Stream is module)