const mongoose=require('mongoose')
const schema=mongoose.Schema


const AptitudetestSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    application_id:{type:mongoose.Types.ObjectId,ref:"jobapplication_register_tb"},
    company_id:{type:mongoose.Types.ObjectId,ref:"company_register_tb"},
    job_id:{type:mongoose.Types.ObjectId,ref:"job_register_tb"},
    marks:{type:Number},
    totalmarks:{type:Number},
    date:{type:Date},
    passed:{type:String},
})


const aptitudetestModel = mongoose.model('aptitudetest_tb', AptitudetestSchema)
module.exports =aptitudetestModel