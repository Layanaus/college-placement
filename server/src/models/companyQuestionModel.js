const mongoose=require('mongoose')
const schema=mongoose.Schema


const QuestionSchema=new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    question:{type:String},
    option1:{type:String},
    option2:{type:String},
    option3:{type:String},
    option4:{type:String},
    answer:{type:String}
    
    
    
})


const companyQuestionModel = mongoose.model('question_tb', QuestionSchema)
module.exports =companyQuestionModel