const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.status(200).send("HomePage")
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
