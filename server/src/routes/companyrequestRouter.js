const express = require('express');
const companyRequestModel = require('../models/companyRequestModel');
const { default: mongoose } = require('mongoose');

const objectId= mongoose.Types.ObjectId


const companyrequestRouter = express.Router();


companyrequestRouter.get('/view-placementrequest/:id',async(req,res)=>{
  try {
    const id = req.params.id
      const request = await companyRequestModel.aggregate([
        
          {
            '$lookup': {
              'from': 'pofficer_register_tbs', 
              'localField': 'college_id', 
              'foreignField': '_id', 
              'as': 'college'
            }
          },
        
        {
          "$unwind": "$college"
        },
        {'$match':{
          'company_id':new objectId(id)
        }},
        {
          "$group": {
            '_id': "$_id",
            'collegename': { "$first": "$college.collegename" },
            'subject': { "$first": "$subject" },
            'message': { "$first": "$message" },
            'status': { "$first": "$status" },
            'company_id': { "$first": "$company_id" },
            'college_id': { "$first": "$college_id" },
          }
        }
      ])
      
      // find({company_id:id})
      if(request[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:request
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






  companyrequestRouter.post('/create_placementrequest', async (req, res) => {
  try {

    const oldUser = await companyRequestModel.findOne({ college_id: req.body.college_id,company_id: req.body.company_id })
    if (oldUser) {
      return res.status(406).json({
        success: false,
        error: true,
        message: "Already requested"
      })
    }
    const data = {
      college_id:req.body.college_id,
      company_id:req.body.company_id,
      subject:req.body.subject,
      message:req.body.message,
      status:0
   
    };
    const savedData = await companyRequestModel(data).save();

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

module.exports = companyrequestRouter;