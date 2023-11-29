const http = require('http');
const fs = require('fs');

http.createServer(function (req, res){
    const fileStream = fs.createReadStream('./CONTENT/big.txt', 'utf8');
    fileStream.on('open',()=>{
        fileStream.pipe()
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})