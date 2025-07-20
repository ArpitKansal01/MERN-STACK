const express = require("express")
const app = express()
const connectDB =require("./db/connect")

const tasks = require("./routes/tasks")


const url = `mongodb+srv://kansalarpit81:root1234@arpitkansal.ttyiqxw.mongodb.net/Task-Manager?retryWrites=true&w=majority&appName=ArpitKansal`

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

