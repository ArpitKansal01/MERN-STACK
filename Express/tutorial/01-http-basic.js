
const http = require('http');

const server = http.createServer((req,res)=>{
    const method = req.method;
    const url = req.url

    if(url === '/'){
        res.writeHead(200,{
            "content-type": "text/html",
        })
        res.end("<h1>Home FILE</h1>");
    }
    else if (url === '/about'){
        res.end("About FILE");
    }
    else{
        res.end("Not Found")
    }
})

server.listen(8080)

console.log("App is running");
