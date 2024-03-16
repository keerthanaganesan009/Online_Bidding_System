const mongoose=require("mongoose");
function DBConnect(){
    mongoose.connect("mongodb+srv://21csa28:j1HXwmP8arNJDMjU@cluster0.ncr7bsj.mongodb.net/BidDB?retryWrites=true&w=majority&appName=Cluster0",{
        useNewUrlParser:true
    }).then((conn)=>{
        console.log("Connected to DB");
    }).catch((err)=>{
        console.log("erroe in DB");
    })                    
}
module.exports=DBConnect;
                    
