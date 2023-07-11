const mongoose=require('mongoose')
const schema=mongoose.Schema


const collegerequestSchema=new schema({
   
    college_id:{type:mongoose.Types.ObjectId,ref:"college_register_tb"},
    subject:{type:String},
    message:{type:String},
    status:{type:String},
    
    
})


const collegeRequestedCompaniesModel = mongoose.model('company_placementrequest_tb',collegerequestSchema)
module.exports =collegeRequestedCompaniesModel