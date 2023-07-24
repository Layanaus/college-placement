const mongoose=require('mongoose')
const schema=mongoose.Schema


const createjobsapplicationSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    job_id:{type:mongoose.Types.ObjectId,ref:"jobportal_register_tb"},
    company_id:{type:mongoose.Types.ObjectId,ref:"company_register_tb"},
    name:{type:String},
    dateofbirth:{type:String},
    address:{type:String},
    phonenumber:{type:Number},
    emailaddress:{type:String},
    education:{type:String},
    skills:{type:String},
    aboutyourself:{type:String},
    application_status:{type:String},
   
    
})



const collegeJobApplicationModel = mongoose.model('jobsapplication_register_tb',createjobsapplicationSchema)
module.exports =collegeJobApplicationModel