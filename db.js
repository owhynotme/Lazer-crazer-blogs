const mongoose=require('mongoose');
const mongoURI="mongodb+srv://LazerCrazerDatabase:Hellomongodb2022@cluster0.chfobog.mongodb.net/?retryWrites=true&w=majority"
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports=connectToMongo;