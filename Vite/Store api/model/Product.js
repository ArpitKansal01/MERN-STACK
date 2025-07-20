const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{type:String, required:[true,"Product name must be provided"]},
    price:{type:Number, required:[true,"Product Price must be provided"] },
    company:{
        type:String,
        enum:{
            values:["marcos","pepperfry","ikea","homeTown"],
            message: `{VALUE} is not supported`
        }
    },
    rating:{type:Number, default:4.5},
    featured:{type:Boolean, default:false},
    createAt: {type:Date, default:Date.now()}
})

module.exports = mongoose.model("Product",productSchema)