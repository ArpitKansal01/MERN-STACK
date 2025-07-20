const express = require("express")
const { dirname } = require("path")

const app = express()

app.use(express.static("./frontend-app"))

app.get("/",(req,res)=>{
    res.status(200).sendFile("index.html")
})
app.get("/about",(req,res)=>{
    res.status(200).send("AboutPage")
})
app.get("/contact",(req,res)=>{
    res.status(200).send("Contact Page")
})
app.get(/.*/,(req, res) => {
  res.status(404).send('Page Not Found');
});
app.get("{*splat}",(req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})
