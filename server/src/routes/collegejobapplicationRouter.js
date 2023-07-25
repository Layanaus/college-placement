const express = require('express');
const collegeJobApplicationModel = require('../models/collegeJobApplicationModel');
const { default: mongoose } = require('mongoose');
const objectId= mongoose.Types.ObjectId

const collegejobapplicationRouter = express.Router();
collegejobapplicationRouter.get('/view-sudhee/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const wishlistItems = await collegeJobApplicationModel.find({job_id:id});
    if (wishlistItems.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: wishlistItems,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'No items found in wishlist',
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});
collegejobapplicationRouter.get('/view-layana/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const wishlistItems = await collegeJobApplicationModel.find({_id:id});
    if (wishlistItems.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: wishlistItems,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'No items found in wishlist',
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

collegejobapplicationRouter.get('/view-collegeapplication',async(req,res)=>{
  try {
    
      const users = await collegeJobApplicationModel.find()
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
  collegejobapplicationRouter.get('/view-applicants-vishnu/:id', async (req, res) => {
    try {
      const id=req.params.id;
      const users = await collegeJobApplicationModel.aggregate([
          
        {
          '$lookup': {
            'from': 'jobportal_register_tbs', 
            'localField': 'job_id', 
            'foreignField': '_id', 
            'as': 'job'
          }
        },
          {
            '$lookup': {
              'from': 'company_register_tbs', 
              'localField': 'company_id', 
              'foreignField': 'login_id', 
              'as': 'company'
            }
        },
        
        {
          "$unwind": "$job"
        },
        {
          "$unwind": "$company"
        },
        {
          $match: { 'login_id':new mongoose.Types.ObjectId(id) },
        },  
        
        
        {
          "$group": {
            '_id': "$_id",
            'login_id': { "$first":"$login_id" },
            'firstname': { "$first":"$name" },
            'job_id': { "$first": "$job._id" },
            'jobname': { "$first": "$job.jobname" },
            'jobdescription': { "$first": "$job.jobdescription" },
            'date': { "$first": "$date" },
            'companyname': { "$first": "$company.companyname" },
            'phonenumber': { "$first": "$company.phonenumber" },
            'company_id': { "$first": "$company.login_id" },
            'application_status': { "$first": "$application_status" },
            
            
          }
        }
      ])
      if (users[0] != undefined) {
        return res.status(200).json({
          success: true,
          error: false,
          data: users
        })
      } else {
        return res.status(400).json({
          success: false,
          error: true,
          message: "No data found"
        })
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong",
        details: error
      })
    }
  })
  collegejobapplicationRouter.get('/view-fasil/:id', async (req, res) => {
    try {
      const id=req.params.id;
      const users = await collegeJobApplicationModel.aggregate([
          
        {
          '$lookup': {
            'from': 'jobportal_register_tbs', 
            'localField': 'company_id', 
            'foreignField': 'company_id', 
            'as': 'job'
          }
        },
          
        
        {
          "$unwind": "$job"
        },
        {
          $match: { 'job_id':new mongoose.Types.ObjectId(id) },
        },  
        {
          "$group": {
            '_id': "$_id",
          
            'job_id': { "$first":"$job._id"},
            'name': { "$first":"$name" },
            'jobname': { "$first": "$job.jobname" },
            'date': { "$first": "$date" },
            'company_id': { "$first": "$company_id" },
            'login_id': { "$first": "$login_id" },
            'application_status': { "$first": "$application_status" },
            
            
          }
        }
      ])
      if (users[0] != undefined) {
        return res.status(200).json({
          success: true,
          error: false,
          data: users
        })
      } else {
        return res.status(400).json({
          success: false,
          error: true,
          message: "No data found"
        })
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong",
        details: error
      })
    }
  })
  collegejobapplicationRouter.get('/view-portal-profile/:id', async (req, res) => {
    try {
      const id = req.params.id;
  
      const users = await collegeJobApplicationModel.aggregate([
       
        {
          '$lookup': {
            'from':'user_profile_tbs', 
            'localField': 'login_id', 
            'foreignField': 'logi_id', 
            'as': 'job'
          }
        },
        {
          "$unwind": "$job"
        },
        {
          $match: { 'login_id':new mongoose.Types.ObjectId(id) },
        },
        {
          "$group": {
            '_id': "$_id",
            'name': { "$first":"$name" },
            'dateofbirth': {"$first":"$dateofbirth" },
            'address': { "$first":"$address" },
            'phonenumber': {"$first":"$phonenumber" },
            'emailaddress': { "$first":"$emailaddress" },
            'education': { "$first":"$education" },
            'skills': { "$first":"$skills" },
            'aboutyourself': {"$first":"$aboutyourself" },
            'cv': {"$first":"$job.cv" },
            'application_status': { "$first": "$application_status" },
            'login_id': { "$first":"$job.login_id" },
          }
        }
      ]);
      
  
      if (users.length > 0) {
        return res.status(200).json({
          success: true,
          error: false,
          data: users
        });
      } else {
        return res.status(404).json({
          success: false,
          error: true,
          message: "User profile not found for the provided login ID."
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: true,
        message: "Something went wrong",
        details: error
      });
    }
  });
  collegejobapplicationRouter.get('/chinnumol/:id', async (req, res) => {
    try {
      const id = req.params.id;
  
      const users = await collegeJobApplicationModel.aggregate([
       
        {
          '$lookup': {
            'from':'user_profile_tbs', 
            'localField': 'login_id', 
            'foreignField': 'login_id', 
            'as': 'job'
          }
        },
        {
          "$unwind": "$job"
        },
        {
          $match: { 'login_id':new mongoose.Types.ObjectId(id) },
        },
        {
          "$group": {
            '_id': "$_id",
            'name': { "$first":"$name" },
            'dateofbirth': {"$first":"$dateofbirth" },
            'address': { "$first":"$address" },
            'phonenumber': {"$first":"$phonenumber" },
            'emailaddress': { "$first":"$emailaddress" },
            'education': { "$first":"$education" },
            'skills': { "$first":"$skills" },
            'aboutyourself': {"$first":"$aboutyourself" },
            'cv': {"$first":"$job.cv" },
            'application_status': { "$first": "$application_status" },
            'login_id': { "$first":"$job.login._id" },
          }
        }
      ]);
      
  
      if (users.length > 0) {
        return res.status(200).json({
          success: true,
          error: false,
          data: users
        });
      } else {
        return res.status(404).json({
          success: false,
          error: true,
          message: "User profile not found for the provided login ID."
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: true,
        message: "Something went wrong",
        details: error
      });
    }
  });
  collegejobapplicationRouter.post('/jobportal_application', async (req, res) => {
    try {
      const dateString = new Date();
      const date = new Date(dateString);
      const formattedDate = date.toISOString().split('T')[0];
      const data = {
        login_id: req.body.login_id,
        job_id: req.body.job_id,
        company_id: req.body.company_id,
        name: req.body.name,
        dateofbirth: req.body.dateofbirth,
        address: req.body.address,
        phonenumber: req.body.phonenumber,
        emailaddress: req.body.emailaddress,
        education: req.body.education,
        skills: req.body.skills,
        date: formattedDate,
        aboutyourself: req.body.aboutyourself,
        application_status:'Applied',
      };
  
      const savedData = await collegeJobApplicationModel(data).save();
  
      if (savedData) {
        return res.status(200).json({
          success: true,
          error: false,
          message: "Registration completed",
          details: savedData
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong",
        details: error
      });
    }
  });
  collegejobapplicationRouter.put('/update-chinnu/:id', async (req, res) => {
    try {
      const id = req.params.id;
      if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Invalid application ID",
        });
      }
  
      const newStatus = req.body.application_status;
  
      const updatedApplication = await collegeJobApplicationModel.findByIdAndUpdate(
        id,
        { $set: { application_status: newStatus } },
        { new: true }
      );
  
      if (updatedApplication) {
        return res.status(200).json({
          success: true,
          error: false,
          message: "Application status updated successfully",
          details: updatedApplication,
        });
      } else {
        return res.status(404).json({
          success: false,
          error: true,
          message: "Application not found",
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: true,
        message: "Something went wrong",
        details: error.message,
      });
    }
  });
   
    

module.exports = collegejobapplicationRouter;