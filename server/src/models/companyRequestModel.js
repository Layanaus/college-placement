const mongoose=require('mongoose')
const schema=mongoose.Schema


const companyrequestSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    subject:{type:String},
    message:{type:String},
    
    
})


const companyRequestModel = mongoose.model('college_placementrequest_tb',companyrequestSchema)
module.exports =companyRequestModel