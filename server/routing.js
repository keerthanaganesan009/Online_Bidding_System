const Bidschema=require("./Bidschema")
const multer=require("multer")
let fname=""
function getDemo(req,res){
    res.send("This is a server")
}
const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,"images")
    },
    filename:(req,res,cb)=>{
        cb(null,fname)
    }
})

exports.upload=multer({
    storage:storage
})
// get all products for bidding
exports.getActive= async(req,res)=>{
   try{
     const allproduct=await Bidschema.find();
     res.status(201).json({
        allproduct
     })
   }
   catch(error){
     console.log("error in all products getting")
   }
}
function getCat(req,res){
    res.send("This is Category")
}
exports.getLogin=(req,res)=>{
    res.send("Login page")
}

// category from database
exports.getItems=async(req,res)=>{
    const {search}=req.params;
    try{
        const items=await Bidschema.find({category_name:search});
        res.json(items);
    }
    catch(error){
        res.send("error in search category");
    }
}

exports.uploadImg=async(req,res)=>{
    try{
       res.status(201).json({
        // field name and value
         data:"uploaded"
       })
    }
    catch(error){
       res.send("error in scahema");
    }
  
   
}

// creation of bid product
exports.Bidproduct=async(req,res)=>{
    try{
       const products=await Bidschema.create(req.body)
       fname=req.body.pimage;
       //console.log(fname)
       res.status(201).json({
        // field name and value
         data:products
       })
    }
    catch(error){
       res.send("error in scahema");
    }
  
   
}
exports.getDemo=getDemo;
exports.getCat=getCat;

