const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const routes = require("./routes");

let users = []

const app = express();

// This code sets up session management using the Express session middleware
app.use(
  session({
    secret: "fingerpint",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());

app.use("/friends", function auth(req,res,next){
   if(req.session.authorization) {
       token = req.session.authorization['accessToken'];
       jwt.verify(token, "access",(err,user)=>{
           if(!err){
        req.user = user;
        next();
           }
           else{
               return res.status(403).json({message: "User not authenticated"})
      }
    });
  } else {
        return res.status(403).json({message: "User not logged in"})
  }
});

const PORT =5000;

app.use("/", routes);

app.listen(PORT,()=>console.log("Server is running"));
