import mongoose from "mongoose"

export const dbConnect=()=>{
    try{
        mongoose.connect("mongodb+srv://parmanandkumawatvhits:abhipri94@cluster0.yhaiv2p.mongodb.net/");
        console.log("connect db")

    }catch(err){
        console.log("Mongo connect error",err)
    }
}
