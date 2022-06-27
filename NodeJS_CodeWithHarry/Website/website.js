import  http from 'http'
import  fs from 'fs'
// console.log(http.ServerResponse.prototype);
const server = http.createServer();
server.on("request", (request, response) => {
    console.log(request.url);
    response.setHeader('content-type', 'text/html');
    if (request.url == '/') {
        response.end("<h1>u r in homepage</h1>")
    }
    else {
        if (request.url == '/city/') {
            console.log(response.statusCode);
            response.end('<h3>hello <h1>agartala</h1></h3 > ')
        }
        else {

            if (request.url == '/website/') {
                const data=fs.readFileSync("D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry\\Website\\website.html")
                response.write(data.toString('utf-8'));
                response.end();
            }
            else {
                response.statusCode = 404;
                response.end('<h1>not found</h1>');
            }    
        }
        
    }
    server.close((err) => {
            console.log("server is closed bye bye");
        
        })
})

server.listen(process.env.PORT||8000, () => {
    console.log( "listening at 8000" );    
})
 

//https://stackoverflow.com/questions/41137902/how-does-server-listen-keep-the-node-program-running

