const mongoose=require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/Fmate',(err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("Connected to mongodb")
    }
})

module.exports = mongoose;