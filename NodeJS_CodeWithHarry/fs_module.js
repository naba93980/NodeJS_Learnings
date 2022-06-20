const fs = require('fs');
// fs.readFile('Node,NPM notes.txt', 'utf-8', (err, data) => { //readfile returns promise
//     console.log(data);
// })
// console.log("finished reading file 5"); //gets printed first as the file is read asynchronously

// console.log("-----------------------");
// let fileDetails = fs.readFileSync('Node,NPM notes.txt','utf-8') //read file runs syncronously and returns buffer/string based on encoding
// console.log(fileDetails);
// console.log("finished reading file 11");

// console.log("-----------------------");
// let fileDetails = fs.readFileSync('Node,NPM notes.txt') //read file runs syncronously and returns buffer/string based on encoding
// console.log(fileDetails.toString());
// console.log("finished reading file 11");

// fs.writeFile('file2.txt', 'this isss file2', 'utf-8', (error) => {
//     console.log("filewriting is done");
// })
// console.log("done with writing file");
fs.writeFileSync('file2.txt', 'this isss file2', 'utf-8');
console.log("done with writing file");














//String is counting characters based on UTF-8 encoding, and the buffer is counting the actual number of bytes used to represent the given string. Just like arrays and strings, for buffer, we can use operations like slice , indexOf , and many others.