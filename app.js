const http = require('http');


const server = http.createServer((req,res)=>{
    if (req.url ==='/'){
        return res.end('Home page')
    }
    if (req.url === '/about'){
        return res.end('about page')
    }
    return res.end('Error page')

})

server.listen(5000, ()=>{
    console.log('server listening on port 5000')
})