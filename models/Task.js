const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
     name: {
          type: String,
          required: [true, "Must provide name"],
          trin: true,
          maxlength: [20,'Name cannot be more than 20 characters']
     },
     completed:Boolean
})

module.exports = mongoose.model('Tasks',TaskSchema)