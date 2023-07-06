const mongoose=require('mongoose')
const schema=mongoose.Schema


const jobcategorySchema=new schema({
    
    
    jobcategory:{type:String},
    
    
    
})


const jobCategoryModel = mongoose.model('job_category_tb',jobcategorySchema)
module.exports =jobCategoryModel