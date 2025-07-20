const http = require('http');

const server = http.createServer((req,res)=>{
        if(req.url === '/'){
            req.end("Home page")
        }
        else if(req.url === '/about'){
            req.end("About page")
        }
        else{
            req.end("Not Found")
        }
})

server.listen(8080)