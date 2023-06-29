const mongoose=require('mongoose')
const schema=mongoose.Schema


const companyrequestSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    company_id:{type:mongoose.Types.ObjectId,ref:"company_register_tb"},
    request:{type:String},
    subject:{type:String},
    message:{type:String},
    
    
})


const companyRequestModel = mongoose.model('college_placement_tb',companyrequestSchema)
module.exports =companyRequestModel