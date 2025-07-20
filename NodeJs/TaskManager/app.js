const express = require("express")
const app = express()
const connectDB =require("./db/connect")

const tasks = require("./routes/tasks")


const url = ``

app.use("/api/v1/tasks",tasks)

async function start() {
    try {
        await connectDB(url)
        console.log("DB Connected");
        app.listen(8080,()=>{
            console.log("Server is listening on port 8080"); 
        })
        
        
    } catch (error) {
        console.log(error);
        
    }
}

start()

