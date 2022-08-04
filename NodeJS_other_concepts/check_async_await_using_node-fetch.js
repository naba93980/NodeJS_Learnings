import fetch from "node-fetch";

console.log("started running file")
function one() {
    return new Promise((res, rej) => {
        console.log("inside promise");
        setTimeout(() => {
            res("hi");
        },3000)
    })
}
async function start()  //ida start er age async thakleo ei function da synchronously execute hoy...
{
    console.log( "inside start" );
    console.log(one());
    // console.log("fetch----->" + fetch());
    const resp = await fetch('https://reqres.in/api/users?page=2');
    const data = await resp.json();
    console.log( data );    
    return 10;    
}
console.log(start());
for (let i = 1; i <= 950; i++)
{
    console.log( i );
    
    }
console.log("end");