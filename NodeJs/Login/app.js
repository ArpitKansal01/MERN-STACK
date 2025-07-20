require("dotenv").config()

const express = require("express")

const PORT = process.env.PORT || 3000
const app = express()

const mainRouter = require("./routes/main")

app.use(express.json())
app.use(express.static("./public"))

app.use("/api/v1",mainRouter)

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
    
})