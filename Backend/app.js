import express from "express"
import dotenv from "dotenv";
import db_Connect from "./Database/dbconnect.js";



const app=express();
dotenv.config()
const Port=process.env.PORT;
await db_Connect();


app.get("/",(req,res)=>{
    res.send("all done");

})

app.listen(Port,()=>{
    console.log(`The server is running on the ${Port}`);
})



