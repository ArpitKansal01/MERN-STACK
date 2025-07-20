require("dotenv").config()

const connectDB = require("./db/connect")
const Product = require("./model/Product")
const jsonProducts = require("./data.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log("Success");
        process.exit(0)
    } catch (error) {
        console.log("Error: ",error);
        process.exit(0)
    }
}

start()