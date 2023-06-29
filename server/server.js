const express = require('express')
const mongoose=require('mongoose')
const loginRouter = require('./src/routes/loginRouter')
const userregRouter = require('./src/routes/userregRouter')
const bodyParser = require('body-parser')
const companycreatejobRouter = require('./src/routes/companycreatejobRouter')
const collegecreatejobRouter = require('./src/routes/collegecreatejobRouter')
const companyjobapplicationRouter = require('./src/routes/companyjobapplicationRouter')
const collegejobapplicationRouter = require('./src/routes/collegejobapplicationRouter')

const app = express()

app.use(bodyParser())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader( 
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
   next();
  });


app.use('/login',loginRouter)
app.use('/register',userregRouter)
app.use('/register',companycreatejobRouter)
app.use('/register',collegecreatejobRouter)
app.use('/register',companyjobapplicationRouter)
app.use('/apply',collegejobapplicationRouter)





const mongoDBurl='mongodb+srv://uslayana:uslayana@cluster0.q9rrp41.mongodb.net/collegeplacement?retryWrites=true&w=majority'

  mongoose.connect(mongoDBurl).then(() =>{
    app.listen(5000,() =>{
    console.log("Server Started");
  })

}).catch((error)=>{
    console.log(error);
})