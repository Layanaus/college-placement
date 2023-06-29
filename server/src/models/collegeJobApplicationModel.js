const mongoose=require('mongoose')
const schema=mongoose.Schema


const createjobsapplicationSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},
    dateofbirth:{type:String},
    address:{type:String},
    phonenumber:{type:Number},
    emailaddress:{type:String},
    education:{type:String},
    skills:{type:String},
    aboutyourself:{type:String},
    
})



const collegeJobApplicationModel = mongoose.model('jobsapplication_register_tb',createjobsapplicationSchema)
module.exports =collegeJobApplicationModel