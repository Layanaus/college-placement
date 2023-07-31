const mongoose=require('mongoose')
const schema=mongoose.Schema


const contactSchema=new schema({
    name:{type:String},
    email:{type:String},
    contactsubject:{type:String},
    contactmessage:{type:String},
    
    
})


const PubliccontactModel = mongoose.model('contact_tb',contactSchema)
module.exports =PubliccontactModel