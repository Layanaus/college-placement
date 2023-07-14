const mongoose=require('mongoose')
const schema=mongoose.Schema


const createjobapplicationSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    job_id:{type:mongoose.Types.ObjectId,ref:"job_register_tb"},
    name:{type:String},
    dateofbirth:{type:String},
    address:{type:String},
    phonenumber:{type:Number},
    emailaddress:{type:String},
    education:{type:String},
    skills:{type:String},
    aboutyourself:{type:String},
   
})



const companyJobApplicationModel = mongoose.model('jobapplication_register_tb',createjobapplicationSchema)
module.exports =companyJobApplicationModel