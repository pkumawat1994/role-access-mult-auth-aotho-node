import mongoose from "mongoose"

export const dbConnect=()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/role-test");
        console.log("connect db")

    }catch(err){
        console.log("Mongo connect error",err)
    }
}