const mongoose=require("mongoose");
const {Schema}=mongoose;
const BookingSchema=new mongoose.Schema({
name:{
    type:String,
    require:true
},
email:{
    type:String,
    required:true,
    
},
phoneno:{
    type:Number,
    required:true
},
date:{
    type:String,
    required:true
},
slot:{
    type:String,
    required:true
},
slotcount:{
    type:Number,
    required:true
},
package:{
    type:String,
    required:true
}

})
const booking=mongoose.model("booking",BookingSchema);
booking.createIndexes();
module.exports=booking