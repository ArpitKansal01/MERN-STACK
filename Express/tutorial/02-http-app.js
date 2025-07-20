const {readFileSync} = require("fs");

const homePage = readFileSync("./frontend-app/index.html")
const homeStyles = readFileSync("./frontend-app/styles.css")
const homeImage = readFileSync("./frontend-app/logo.svg")
const homeLogic = readFileSync("./frontend-app/browser-app.js")

const http = require('http');

const server = http.createServer((req,res)=>{
    const method = req.method;
    const url = req.url

    if(url === '/'){
        res.writeHead(200,{
            "content-type": "text/html",
        })
        res.write(homePage)
        res.end();
    }
    else if(url==='/styles.css'){
        res.writeHead(200,{
            "content-type": "text/css",
            })
            res.write(homeStyles)
            res.end();
    }
    else if(url==='/logo.svg'){
        res.writeHead(200,{
            "content-type": "image/svg+xml",
            })
            res.write(homeImage)
            res.end();
    }
    else if (url === '/browser-app.js'){
        res.writeHead(200,{
            "content-type": "application/javascript",
            })
            res.write(homeLogic)
            res.end();
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
