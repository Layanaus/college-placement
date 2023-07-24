const mongoose=require('mongoose')
const schema=mongoose.Schema


const notifyinterviewSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    job_id:{type:mongoose.Types.ObjectId,ref:"job_register_tb"},
    message:{type:String},
    date:{type:String},
    
    
    
})


const companyNotifyInterviewModel= mongoose.model('notify_interview_tb',notifyinterviewSchema)
module.exports =companyNotifyInterviewModel