// const { readFileSync, writeFileSync } = require('fs');
// const first = readFileSync('./content/subcontent/first.txt','utf-8');
// console.log(first);
// writeFileSync('./content/subcontent/result.txt',first)
// writeFileSync('./content/subcontent/result.txt',first,{flag:'a'})


const { readFile, writeFile } = require('fs');
readFile('./content/subcontent/first.txt', 'utf-8', (err, data) => {
    if(!err)
        writeFile('./content/subcontent/result.txt', data, { encoding: 'utf-8', flag: 'a' }, (err) => {
            if (!err)
                console.log("done");            
        })
    else
        console.log( err ); 
})
console.log( "end" );
