const express=require('express')

const companyRegisterModel = require('../models/companyRegisterModel')
const collegeRegisterModel = require('../models/collegeRegisterModel')
const loginModel = require('../Models/loginModel')
const userRegisterModel = require('../models/userRegisterModel')

const userregRouter=express.Router()


userregRouter.get('/view-users',async(req,res)=>{
  try {
      const users = await userRegisterModel.find()
      if(users[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:users
          })
      }else{
          return res.status(400).json({
              success:false,
              error:true,
              message:"No data found"
          })
      }
  } catch (error) {
      return res.status(400).json({
          success:false,
          error:true,
          message:"Something went wrong",
          details:error
      })
  }
  })

userregRouter.post('/userreg',async (req, res)=> {
    try {
        const oldUser = await loginModel.findOne({ username:req.body.username})
        if(oldUser){
           return res.status(406).json({
            success:false,
            error:true,
            message:"Username already exists"
           })
         }
        const oldEmail = await userRegisterModel.findOne({ email:req.body.email})
        if(oldEmail){
            return res.status(406).json({
             success:false,
             error:true,
             message:"Email already exists"
            })
           }
           const login_data = {
            username:req.body.username,
            password:req.body.password,
            status:0,
            role:1
           }
           const save_login = await loginModel(login_data).save()
           if (save_login){
            const register_data = {
                login_id:save_login._id,
                firstname:req.body.first_name,
        dob:req.body.dob,
        gender:req.body.gender,
        applicantimage:req.body.file4,
        address:req.body.address,
        choosecollege:req.body.college,
        qualification:req.body.qualification,
        regno:req.body.regnumber,
        email:req.body.email,
        phone:req.body.phone,
            }
            const save_register = await userRegisterModel(register_data).save()
            if (save_register){
                 return res.status(201).json({
                   success:true,
                   error:false,
                   message:"Registration completed",
                   detais:save_register
                 })
            }
           }
        }

    catch (error) {
       return res.status(400).json({
          success:false,
          error:true,
          message:"Something went wrong",
       
             details:error
   })
}



    })

    userregRouter.get('/view-company',async(req,res)=>{
      try {
          const users = await companyRegisterModel.find()
          if(users[0]!=undefined){
              return res.status(200).json({
                  success:true,
                  error:false,
                  data:users
              })
          }else{
              return res.status(400).json({
                  success:false,
                  error:true,
                  message:"No data found"
              })
          }
      } catch (error) {
          return res.status(400).json({
              success:false,
              error:true,
              message:"Something went wrong",
              details:error
          })
      }
      })

   userregRouter.post('/companyreg',async function (req, res) {
    try {
        const oldUser = await loginModel.findOne({ username:req.body.username})
        if(oldUser){
           return res.status(406).json({
            success:false,
            error:true,
            message:"Username already exists"
           })
         }
        const oldEmail = await companyRegisterModel.findOne({ email:req.body.email})
        if(oldEmail){
            return res.status(406).json({
             success:false,
             error:true,
             message:"Email already exists"
            })
           }
           const login_data = {
            username:req.body.username,
            password:req.body.password,
            status:0,
            role:2
           }
           const save_login = await loginModel(login_data).save()
           if (save_login){
            const register_data = {
                login_id:save_login._id,
                companyname:req.body.companyname,
        companycategory:req.body.companycategory,
        companylocation:req.body.companylocation,
        email:req.body.email,
        phone:req.body.phone,
        websiteaddress:req.body.websiteaddress,
       
    }
    const save_register = await companyRegisterModel(register_data).save()
    if (save_register){
         return res.status(201).json({
           success:true,
           error:false,
           message:"Registration completed",
           detais:save_register
         })
    }
   }
}

catch (error) {
return res.status(400).json({
  success:false,
  error:true,
  message:"Something went wrong",
  details:error
})
}



})

userregRouter.get('/view-college',async(req,res)=>{
  try {
      const users = await collegeRegisterModel.find()
      if(users[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:users
          })
      }else{
          return res.status(400).json({
              success:false,
              error:true,
              message:"No data found"
          })
      }
  } catch (error) {
      return res.status(400).json({
          success:false,
          error:true,
          message:"Something went wrong",
          details:error
      })
  }
  })

   userregRouter.post('/collegereg',async function (req, res) {
    try {
        const oldUser = await loginModel.findOne({ username:req.body.username})
        if(oldUser){
           return res.status(406).json({
            success:false,
            error:true,
            message:"Username already exists"
           })
         }
        const oldEmail = await collegeRegisterModel.findOne({ email:req.body.email})
        if(oldEmail){
            return res.status(406).json({
             success:false,
             error:true,
             message:"Email already exists"
            })
           }
           const login_data = {
            username:req.body.username,
            password:req.body.password,
            status:0,
            role:3
           }
           const save_login = await loginModel(login_data).save()
           if (save_login){
            const register_data = {
                login_id:save_login._id,
        collegename:req.body.collegename,
        collegeaddress:req.body.collegeaddress,
        email:req.body.email,
        phone:req.body.phone,
       
    }
    const save_register = await collegeRegisterModel(register_data).save()
    if (save_register){
         return res.status(201).json({
           success:true,
           error:false,
           message:"Registration completed",
           detais:save_register
         })
    }
   }
}

catch (error) {
return res.status(400).json({
  success:false,
  error:true,
  message:"Something went wrong",
  details:error
})
}



})

module.exports=userregRouter