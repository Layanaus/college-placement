const mongoose=require('mongoose')
const schema=mongoose.Schema


const createjobportalSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    companyname:{type:String},
    companylocation:{type:String},
    jobname:{type:String},
    jobdescription:{type:String},
    jobcategory:{type:String},
    Requiredqualification:{type:String},
    salaryrange:{type:String},
    companycontact:{type:String},
    lastdate:{type:String},
       
})



const collegeCreateJobModel = mongoose.model('jobportal_register_tb',createjobportalSchema)
module.exports =collegeCreateJobModel