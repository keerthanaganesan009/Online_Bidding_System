const express=require("express");
const DBConnect=require("./DBConnect");
const cors=require("cors")
const app=express();
const route=require("./routing");
app.use(express.json())
app.use(express.static("./images"))
app.use(cors())
DBConnect();
// Home
app.get("/",route.getDemo)

// Active Listining
app.get("/activelis",route.getActive)

// Category
app.get("/category",route.getCat)

//category search
app.get("/category/:search",route.getItems)

// creating product for bidding
app.post("/create",route.Bidproduct)

//upload image
app.post("/create/upload",route.upload.single("file"),route.uploadImg)
//login
app.get("/login",route.getLogin)

app.listen(4000,()=>{
    console.log("Server started")
})