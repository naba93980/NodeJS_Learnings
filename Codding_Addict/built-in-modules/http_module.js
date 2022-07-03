const http = require('http')
const server = http.createServer();
server.on('request', (request, response) => {
    response.write('hello');
    response.end();
    server.close();
});
server.listen(8000, () => {
    console.log( "listening " );
    
});