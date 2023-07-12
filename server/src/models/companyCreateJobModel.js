const mongoose=require('mongoose')
const schema=mongoose.Schema


const createjobSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    companyname:{type:String},
    companylocation:{type:String},
    jobname:{type:String},
    jobdescription:{type:String},
    jobcategory:{type:mongoose.Types.ObjectId,ref:"job_category_tb"},
    vaccancy:{type:String},
    qualification:{type:String},
    expectedsalary:{type:String},
    branch:{type:String},
    lastdate:{type:String},
   
})



const companyCreateJobModel = mongoose.model('job_register_tb',createjobSchema)
module.exports =companyCreateJobModel