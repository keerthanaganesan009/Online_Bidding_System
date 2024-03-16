const mongoose=require("mongoose");
const Bidsch=new mongoose.Schema({
    product_name:{
        type:String,
        required:[true,"Product name requried"],
        trim:true
    },
    category_name:{
        type:String,
        required:[true,"plz enter Category"],
        trim:true
    },
    base_bid:{
        type:Number,
        min:[1,"Base bid cannot be less than 0"],
        required:[true,"Entere your base bid amout"]
    },
    bid_end:{
        type:String,//want to change in date
        required:[true,"Enter when you want end your bidding"]
    },
    pimage:{
        type:String
    }
})
//any name ,collection name,schema name
const Bidschema=mongoose.model("Bidschema",Bidsch);
module.exports=Bidschema;