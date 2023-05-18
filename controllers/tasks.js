const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const createCustomError = require('../errors/custom-error')
const getAllTasks = asyncWrapper(async(req,res) => {
  
      const task = await Task.find({})
      res.status(201).json({task})   
   }   
)

 const createTask =asyncWrapper( async(req,res) => {
      const task = await Task.create(req.body)
   } 
 )


 const getTask = asyncWrapper(async(req,res) => {
    //res.json({id: req.params.id})
    const {id:TaskID} = req.params; 
  
      const task = await Task.findOne({_id: TaskID})
      if(!task){
         return next(createCustomError(`No Task with id: ${TaskID}`,404))

      }
      res.status(201).json({task})      
   } 
 )

 const updateTask = asyncWrapper(async (req,res,next) => {
   //  res.send('update task')
    
       //res.json({id: req.params.id})
       const {id:TaskID} = req.params; 
   
         const task = await Task.findOneAndUpdate({_id: TaskID},req.body,{
            new: true,
            runValidators: true
         })
         if(!task){
            //custom error;
            return next(createCustomError(`No Task with id: ${TaskID}`,404))

   
         }
         res.status(201).json({task})      
      } 
 )

 const deleteTask = asyncWrapper(async (req,res) => {
   //  res.send('delete task')

       //res.json({id: req.params.id})
       const {id:TaskID} = req.params; 
         const task = await Task.findOneAndDelete({_id: TaskID})
         if(!task){
            return next(createCustomError(`No Task with id: ${TaskID}`,404))   
         }
         res.status(201).json({task: null, status: 'success' })      

 })

 module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
 }