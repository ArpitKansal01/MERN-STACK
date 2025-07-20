const express = require("express")

const router = express.Router()

const {getProducts,getStaticProducts} = require("../controllers/product")

router.get("/",getProducts)
router.get("/static",getStaticProducts)

module.exports= router