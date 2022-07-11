const { readFile } = require('fs');

function getText(path)
{
    return new Promise((resolve, reject) => {
    readFile(path,'utf-8', (err, data) => {
    if (err)
    {
        reject(err);
    }
    else
    {
        resolve(data);        
    }    
})
})
}
// getText('./first.txt').then(res => {
//     console.log( res );    
// }).catch(err => {
//     console.log( err );
// })

const start = async () => {
    try {
        const first = await getText('./first.txt');
        console.log(first);
        const second = await getText('./second.txt');
        console.log(second);
    }
    catch (err) {
        console.log( err );        
    }
}
start();
console.log( "end" );

































// function checkprom()
// {
    
//     return new Promise((res, rej) => {
//     setTimeout(() => {
//     res(10);
// })

//     },5000)
// }
// async function wit()
// {
//     let con = await checkprom();
//     console.log( con );
//     console.log("hello from wit");
    
// }
// wit();
// console.log( "hello" );
