const dotenv = require("dotenv")
const express = require("express")
const connectDB = require("./db/connect")
const productRoutes = require("./routes/product")

const app = express()
dotenv.config()
app.use("/api/v1/products",productRoutes)
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        console.log("Connected with database");
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error: ",error);
        
    }
}

start()

