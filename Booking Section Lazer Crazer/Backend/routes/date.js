const express=require("express");
const router=express.Router();

const Dateob=require("../models/Date")
const mongoose=require("mongoose");
const {Schema}=mongoose;


//Route:0  : to view a given slot
router.post("/getslots",async (req,res)=>{
    try {
        const slotdate=req.body.slotdate
        
        const date=await Dateob.findOne({date:slotdate});
        let finaldate=date;
        // console.log(date)
        if(!date){
            let newdate=new Dateob({
                date:slotdate,
                slots:[
                    {
                        slottime:"11:00AM",
                        slotcount:15
                    },
                    {
                        slottime:"11:40AM",
                        slotcount:15
                    },{
                        slottime:"12:20PM",
                        slotcount:15
                    },{
                        slottime:"1:00PM",
                        slotcount:15
                    },{
                        slottime:"1:40PM",
                        slotcount:15
                    },{
                        slottime:"2:20PM",
                        slotcount:15
                    },{
                        slottime:"3:00PM",
                        slotcount:15
                    },{
                        slottime:"3:40PM",
                        slotcount:15
                    },{
                        slottime:"4:20PM",
                        slotcount:15
                    },{
                        slottime:"5:00PM",
                        slotcount:15
                    },{
                        slottime:"5:40PM",
                        slotcount:15
                    },
                    {
                        slottime:"6:20PM",
                        slotcount:15
                    },
                    {
                        slottime:"7:00PM",
                        slotcount:15
                    },{
                        slottime:"7:40PM",
                        slotcount:15
                    },{
                        slottime:"8:20PM",
                        slotcount:15
                    },
                    {
                        slottime:"9:00PM",
                        slotcount:15
                    },
                    
                ]
            }
            
            );
            const saveddate=await newdate.save(); 
            finaldate=saveddate     
            
        }
        res.json(finaldate);

        
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }
 })








//ROUTE:1  : to add date for start of a given day
router.post("/adddate",async (req,res)=>{
    try {
        const slotdate=req.body.slotdate
        const nowDate=new Date();
        let todaysdate =nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();
        if(slotdate){
            todaysdate=slotdate
        }
        const date=await Dateob.findOne({date:todaysdate});
        console.log(date)
        if(date){
            return res.status(400).json({error:"this date already exists"});
        }
        
        let newdate=new Dateob({
            date:todaysdate,
            slots:[
                {
                    slottime:"11:00AM",
                    slotcount:15
                },
                {
                    slottime:"11:40AM",
                    slotcount:15
                },{
                    slottime:"12:20PM",
                    slotcount:15
                },{
                    slottime:"1:00PM",
                    slotcount:15
                },{
                    slottime:"1:40PM",
                    slotcount:15
                },{
                    slottime:"2:20PM",
                    slotcount:15
                },{
                    slottime:"3:00PM",
                    slotcount:15
                },{
                    slottime:"3:40PM",
                    slotcount:15
                },{
                    slottime:"4:20PM",
                    slotcount:15
                },{
                    slottime:"5:00PM",
                    slotcount:15
                },{
                    slottime:"5:40PM",
                    slotcount:15
                },
                {
                    slottime:"6:20PM",
                    slotcount:15
                },
                {
                    slottime:"7:00PM",
                    slotcount:15
                },{
                    slottime:"7:40PM",
                    slotcount:15
                },{
                    slottime:"8:20PM",
                    slotcount:15
                },
                {
                    slottime:"9:00PM",
                    slotcount:15
                },
                
            ]
        });
        const saveddate=await newdate.save();   
        res.json(saveddate);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }
 })


 //route-2 to update the number of slots available
 
 router.put("/bookslot/",async (req,res)=>{


    try {
        const {slotdate,slots,time}=req.body;
    // const newslot={};
    // if(title){newnote.title=title};
    // if(description){newnote.description=description};
    // if(tag){newnote.tag=tag};
    let requireddate=await Dateob.findOne({date:slotdate});
    console.log(requireddate);

    


    // to be done
    if(!requireddate){
        let newdate=new Dateob({
            date:slotdate,
            slots:[
                {
                    slottime:"11:00AM",
                    slotcount:15
                },
                {
                    slottime:"11:40AM",
                    slotcount:15
                },{
                    slottime:"12:20PM",
                    slotcount:15
                },{
                    slottime:"1:00PM",
                    slotcount:15
                },{
                    slottime:"1:40PM",
                    slotcount:15
                },{
                    slottime:"2:20PM",
                    slotcount:15
                },{
                    slottime:"3:00PM",
                    slotcount:15
                },{
                    slottime:"3:40PM",
                    slotcount:15
                },{
                    slottime:"4:20PM",
                    slotcount:15
                },{
                    slottime:"5:00PM",
                    slotcount:15
                },{
                    slottime:"5:40PM",
                    slotcount:15
                },
                {
                    slottime:"6:20PM",
                    slotcount:15
                },
                {
                    slottime:"7:00PM",
                    slotcount:15
                },{
                    slottime:"7:40PM",
                    slotcount:15
                },{
                    slottime:"8:20PM",
                    slotcount:15
                },
                {
                    slottime:"9:00PM",
                    slotcount:15
                },
                
            ]
        });
        const saveddate=await newdate.save();   
        // res.json(saveddate);
        requireddate=saveddate
    }

    for (let i = 0; i < requireddate.slots.length; i++) {
        const element = requireddate.slots[i];
        if(element.slottime==time){
            element.slotcount=element.slotcount-slots;
        }
    }
    let finaldate=await Dateob.findOneAndUpdate({date:slotdate},{$set:requireddate},{new:true});
    res.send(finaldate);
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send('some error occured');
    }

});












 module.exports=router;