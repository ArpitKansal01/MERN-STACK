const Task = require("../model/Task")

const getAllTasks = async (req,res ) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({message:"Success",tasks:tasks})
    } catch (error) {
        res.status(400).json({message:"Failed",error:error})
    }
}
const createTask = (req,res ) => {
    Task.create({
        name:"Task 1",
        completed:false,
    })
}
const getSingleTask = async (req,res ) => {
    try {
        const {id} = req.params        
        const tasks = await Task.find({_id:id})
        if(!tasks){
            res.status(404).json({message: "Failed",error: `No task with id: ${id}`})
        }
        res.status(200).json({message:"Success",tasks:tasks})
    } catch (error) {
        res.status(400).json({message:"Failed",error:error})
    }
}
const updateTask = async (req,res ) => {
    try{
        const {id} = req.params
        const task = await Task.findOneAndUpdate({_id:id},req.body,{
            new:true,
            runValidators:true,
        })
        if(!tasks){
            res.status(404).json({message: "Failed",error: `No task with id: ${id}`})
        }
        res.status(200).json({message:"Success",tasks:tasks})
    } catch (error) {
        res.status(400).json({message:"Failed",error:error})
    }
}
const deleteTask = async (req,res ) => {
   try {
        const {id} = req.params     
        const tasks = await Task.findOneAndDelete({_id:id})
        if(!tasks){
            res.status(404).json({message: "Failed",error: `No task with id: ${id}`})
        }
        res.status(200).json({message:"Success",tasks:tasks})
    } catch (error) {
        res.status(400).json({message:"Failed",error:error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}