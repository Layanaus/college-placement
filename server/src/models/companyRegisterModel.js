const mongoose=require('mongoose')
const schema=mongoose.Schema


const companyRegisterSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    companyname:{type:String},
    companycategory:{type:String},
    companylocation:{type:String},
    email:{type:String},
    phone:{type:String},
    websiteaddress:{type:String},
    
    
})



const companyRegisterModel = mongoose.model('company_register_tb',companyRegisterSchema)
module.exports =companyRegisterModel