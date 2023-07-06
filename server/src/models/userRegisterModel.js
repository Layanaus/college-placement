const mongoose=require('mongoose')
const schema=mongoose.Schema


const userRegisterSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    firstname:{type:String},
    dob:{type:String},
    gender:{type:String},
    applicantimage:{type:String},
    address:{type:String},
    choosecollege:{type:mongoose.Types.ObjectId,ref:"pofficer_register_tb"},
    qualification:{type:String},
    regno:{type:String},
    email:{type:String},
    phone:{type:String},
    
    
})


const userRegisterModel = mongoose.model('user_register_tb',userRegisterSchema)
module.exports =userRegisterModel