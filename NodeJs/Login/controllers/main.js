const {StatusCodes} = require("http-status-codes") 
const jwt = require("jsonwebtoken")
const login = async (req,res) => {

    const {username,password} = req.body

    if(!username || !password) {
        res.status(StatusCodes.BAD_REQUEST).json({
            msg:"Please provide username and password"
        })
    }

    const id = new Date().getDate()
    const user = {id,username,password}
    console.log(user);

    const token = jwt.sign({
        id:user.id,
        username: user.username,
    },"This-is-my-secret-key",{expiresIn:"30d"})

    res.status(StatusCodes.CREATED).json({
        msg: "user created",token
    })
}

const dashboard =  async (req,res) => {

    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer")){
        res.status(StatusCodes.UNAUTHORIZED).json({
            msg:"No token Provided"
        })
    }

    const token = authHeader.split(" ")[1]
    
    try {
        const decoded = jwt.verify(token,"This-is-my-secret-key")
    } catch (error) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            msg:"not authorized to access this router"
        })
    }

    const secretNumber = 1234

    res.status(StatusCodes.OK).json({
        msg: "Hello USer",
        secret: `Here is your authorized data, your secret number is ${secretNumber} `
    })
}

module.exports = {login,dashboard}