import express from "express"; 
import cookieParser  from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
dotenv.config({});


const app = express();


app.get("/home", (req,res)=>{
    return res.status(200).json({
        message : "hello anant ke papa",
        success : true
    }) 
})

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
const corsOptions = {
    origin : 'http//:localhost:5173',
    credentials : true
}
app.use(cors(corsOptions))

const port = process.env.PORT || 3000; 

//apis
app.use("/api/v1/user", userRoute )
app.use("/api/v1/company", companyRoute )



app.listen(port, ()=>{
    console.log(`server running at ${port}`)
    connectDB()

})



//jitnaaa usekiaa usee me kiaa dekhana baaki hai


//cors
//utils and cnfig me kiaa diffrnce me ne rtih db wali file ko utils me likhaa hai and chat gpt says ki db wali file and .env etc ko config me daloo 



















