const fs = require('fs');
const http = require('http');

const readStream = fs.createReadStream('./content.txt', { highWaterMark: 9000, encoding: 'utf-8' });
readStream.on('data', (result) => {
    console.log(result); 
})

readStream.on('error', (err)=> {
  console.log( "error hai "+err );    
})

//not sending as in chunk streams
const text = fs.readFileSync('./content.txt');
http.createServer((req, res) => {
    res.end(text);
}).listen(5000, () => {
    console.log( "listening at port 5000" );  
})





// createReadStream arguments :-

// default 64kb
// last buffer - remainder
// highWaterMark - control buffer size
// const stream createReadStream('./content/big.txt', { hiqhWaterMark: 90000})
// const stream = createReadStream('./content/big.txt', { encoding: 'utf-8'})



