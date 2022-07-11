const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {    
    if (req.url === '/') {
        // BLOCKING CODE //
        for (let i = 0; i < 1000; i++) {          
            for (let j = 0; j < 1000; j++) {
                console.log( 'hi' );            
            }
        }
        res.end('hi..');
    }
    if (req.url === '/about')
    {
        console.log( "in about" );        
        res.end('from aboutttt');            
    }    
})
server.listen(5000, () => {
    
    console.log("listening at port 5000...");
});