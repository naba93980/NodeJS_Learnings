var fs = require('fs')
var myreadStream = fs.createReadStream(__dirname + '/note.txt', 'utf-8');
var mywriteStream = fs.createWriteStream(__dirname +'/writenode.txt', 'utf-8');
var mywriteStream2 = fs.createWriteStream(__dirname +'/writepipenode.txt', 'utf-8');

myreadStream.on('data', (chunk) => {
    console.log( "-new chunk received-" );
    // console.log(chunk);
    mywriteStream.write(chunk);
    
})

//shortcut
myreadStream.pipe(mywriteStream2);

//myreadStream is object of fs.ReadStream class which extends Stream.Readable class(Stream is module)
//myWriteStream is object of fs.WriteStream class which extends Stream.Writeable class