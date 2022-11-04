import express from "express";
import sendEmail from "./sendmail.js";
import dotenv from "dotenv";

const app= express();
const PORT = 3000;
dotenv.config();
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/api/sendemail", async  (req,res) =>{
    const {email} =req.body;
  
    try{
      const send_to = email;
      const send_from = process.env.EMAIL_USER;
      const reply_to = email;
      const subject = "ThankYou"
      const message = `
      Hi hello,
      ${content}`
    
  
  
      await sendEmail(subject,message,send_to,send_from,reply_to)
      res.send(200).json({success:true, message:"email send"})
    }catch (error){
      console.log(500)
    }
  });