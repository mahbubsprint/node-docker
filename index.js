const express = require("express")
const app = express();


app.get('/',(req, res)=>{
    res.send('<h1> Node docker is running from docker container</h1>');
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('app is running on port 3000 and it is a test server')
})