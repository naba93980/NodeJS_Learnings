const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    console.log( "req aise" );
    
    const readStream = fs.createReadStream('./content.txt', { highWaterMark: 9000, encoding: 'utf-8' });
    readStream.pipe(res);

}).listen(5000, () => {
    console.log( "listening at port 5000" );
})





// createReadStream arguments :-

// default 64kb
// last buffer - remainder
// highWaterMark - control buffer size
// const stream createReadStream('./content/big.txt', { hiqhWaterMark: 90000})
// const stream = createReadStream('./content/big.txt', { encoding: 'utf-8'})



