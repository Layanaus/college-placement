const mongoose=require('mongoose')
const schema=mongoose.Schema


const collegeplacementSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    college_id:{type:mongoose.Types.ObjectId,ref:"pofficer_register_tb"},
    request:{type:String},
    
    
    
})


const companyCollegeModel = mongoose.model('college_placement_tb',collegeplacementSchema)
module.exports =companyCollegeModel