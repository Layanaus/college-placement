const mongoose=require('mongoose')
const schema=mongoose.Schema


const placedstudentSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    studentname:{type:String},
    description:{type:String},
    uploadimage:{type:String},
    userexperience:{type:String},
    
    
})


const PlacedStudentModel = mongoose.model('placed_student_tb',placedstudentSchema)
module.exports =PlacedStudentModel