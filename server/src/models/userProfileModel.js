const mongoose=require('mongoose')
const schema=mongoose.Schema


const userProfileSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    firstname:{type:String},
    lastname:{type:String},
    dob:{type:String},
    gender:{type:String},
    addressline1:{type:String},
    addressline2:{type:String},
    postcode:{type:String},
    location:{type:String},
    district:{type:String},
    email:{type:String},
    alternativeemail:{type:String},
    mobile:{type:String},
    alternativemobile:{type:String},
    education:{type:String},
    branch:{type:String},
    year:{type:String},
    experience:{type:String},
    experienceyear:{type:String},
    skill:{type:String},
    cv:{type:String},
    
    
    
})


const userProfileModel = mongoose.model('user_profile_tb',userProfileSchema)
module.exports =userProfileModel