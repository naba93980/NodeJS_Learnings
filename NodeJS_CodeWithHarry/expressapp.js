import createExpressApp from "express";
// console.log( createExpressApp );
const app = createExpressApp();
app.get('/', (req, res) => {
    console.log( req.url );    
    res.send("this is home page");
})
app.get('/about/', (req, res) => {
    console.log( req.url );
    res.send("this is about page");
})
app.get('/name', (req, res) => {
    console.log( req.url );
    res.send("this is name page");
})
app.get('*', (req, res) => {
    console.log( req.url );
    res.send("this is ff page");
})
app.listen(8000, () => {
    console.log( "listening at port 8000" );    
})

