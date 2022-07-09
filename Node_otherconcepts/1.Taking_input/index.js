const readline = require('readline');
const clinterface=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
clinterface.on('line', (line) => {
    console.log(line + "entered");
    clinterface.close();
})
// clinterface.question('what is ur name', (input) => {
//     console.log( input );
//     clinterface.close();
// })
