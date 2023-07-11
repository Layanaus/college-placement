const mongoose=require('mongoose')
const schema=mongoose.Schema


const companyrequestSchema=new schema({
    user_id:{type:mongoose.Types.ObjectId,ref:"pofficer_register_tb"},
    company_id:{type:mongoose.Types.ObjectId,ref:"company_register_tb"},
    subject:{type:String},
    message:{type:String},
    status:{type:String},
    
    
})


const companyRequestModel = mongoose.model('college_placementrequest_tb',companyrequestSchema)
module.exports =companyRequestModel