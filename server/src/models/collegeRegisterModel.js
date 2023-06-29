const mongoose=require('mongoose')
const schema=mongoose.Schema


const collegeRegisterSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    collegename:{type:String},
    collegeaddress:{type:String},
    email:{type:String},
    phone:{type:String},
   
    
    
})



const collegeRegisterModel = mongoose.model('pofficer_register_tb',collegeRegisterSchema)
module.exports =collegeRegisterModel