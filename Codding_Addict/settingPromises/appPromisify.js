const { readFile, writeFile } = require('fs').promises;   //adding .promise at end just does somewhat similar to the below 3 lines


// const util = require('util');
// const readFilePromisify = util.promisify(readFile);
// const writeFilePromisify = util.promisify(writeFile);


const start = async () => {
    try {
        //-------------just checking------------------
        // setTimeout(() => {
        //     console.log("hello");
        //     process.nextTick(() => {
        //         console.log( "heeee" ); 
        //     });     
        // },0)
        //--------------------------------------------
        
        
        
        // const first = await readFilePromisify('./first.txt', 'utf-8');
        const first = await readFile('./first.txt', 'utf-8');
        console.log(first);
        // const second = await readFilePromisify('./second.txt', 'utf-8');
        const second = await readFile('./second.txt', 'utf-8');
        console.log(second);
        // await writeFilePromisify('./third.txt', `this is to write: ${first}, ${second}`);
        await writeFile('./third.txt', `this is to write: ${first}, ${second}`);
    }
    catch (err) {
        console.log( err );        
    }
}
start();
console.log("end");
// readFile('./first.txt','utf-8')