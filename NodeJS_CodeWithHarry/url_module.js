import sabkuch from 'url'
console.log(sabkuch);
// console.log(sabkuch.URL);
// console.log(URL);
const newurl = new URL('https://www.youtube.com/watch?v=iwolPf6kN-k');
// console.log(newurl);
console.log("1 "+newurl.protocol);
console.log("2 "+newurl.hostname);
console.log("3 "+newurl.host);
console.log("4 "+newurl.origin);
console.log("5 "+newurl.pathname);
console.log("6 "+newurl.search);
console.log("7 "+newurl.hash);
console.log("8 "+newurl.port);
console.log("9 "+newurl.searchParams);
console.log("10 "+newurl.username);
console.log("11 "+newurl.href);


//---------------------------------------------href-----------------------------------------------                   
//https:    //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h   ?  query=string   #hash
//         │  │                     |    hostname     │ port │          │                 │ 
//protocol |  | username │ password |               host     |          |                 |             
//     origin |                     |           origin       | pathname |      search     | hash