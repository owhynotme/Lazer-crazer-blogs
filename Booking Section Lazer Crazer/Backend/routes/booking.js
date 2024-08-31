const express=require("express");
const router=express.Router();


const mongoose=require("mongoose");
const booking = require("../models/Booking");
const {Schema}=mongoose;

//ROUTE:2  : to add note for a particular user /api/notes/addnote
router.post("/addbooking"
,async (req,res)=>{
    try {
        

        const {name,email,phoneno,date,slot,slotcount,package}=req.body;
        // console.log(req);
        let newbooking=new booking({name:name,email:email,phoneno:phoneno,date:date,slot:slot,slotcount:slotcount,package:package
        });
        const savedbooking=await newbooking.save();   
        res.json(savedbooking);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }
 })








module.exports=router;