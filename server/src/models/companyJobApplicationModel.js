const mongoose=require('mongoose')
const schema=mongoose.Schema


const createjobapplicationSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    company_id:{type:mongoose.Types.ObjectId,ref:"company_register_tb"},
    job_id:{type:mongoose.Types.ObjectId,ref:"job_register_tb"},
    date:{type:String},
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



const companyJobApplicationModel = mongoose.model('jobapplication_register_tb',createjobapplicationSchema)
module.exports =companyJobApplicationModel