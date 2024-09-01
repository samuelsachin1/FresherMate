const mongoose = require('../Config/Connection')

const QuestionPaper = mongoose.Schema({
    creatorId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    },
   createdAt:{
    type: Date,
    default: Date.now
   },
   subjectName:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   degree:{
    type:String,
    required:true
   },
   branch:{
    type:String,
    required:true
   },
   semester:{
    type:String,
    required:true
   },
   curriculum:{
    type:String,
    required:true
   },
   file: 
    {
      filename: {
        type: String,
        required: true,
      },
      fileId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
    },
    year:{
        type:String
    }
})

module.exports = mongoose.model('questionpaper',QuestionPaper)