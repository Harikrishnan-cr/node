

const express = require('express');

const server = express();

const morgan = require('morgan');


server.use(morgan('dev'));


server.get('/getdata',(req,res)=>{
    res.json({
        'data' : 66665
    })
console.log(req.body);
});
server.post('/add',(req,res)=>{
console.log(req.body); 
});
server.listen(3000,()=>{ 

console.log('server created');
});


