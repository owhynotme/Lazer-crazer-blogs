const mongoose=require("mongoose");
const {Schema}=mongoose;
const DateSchema=new mongoose.Schema({
date:{
    type:String,
    require:true
},
slots:{
    type:[
        {
            slottime:String,
            slotcount:Number
        }
    ]
}

})
const date=mongoose.model("date",DateSchema);
date.createIndexes();
module.exports=date