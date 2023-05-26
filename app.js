const express = require('express');
const app = express();
const dotenv = require("dotenv")
const { db } = require("./db")
const jwt = require("jsonwebtoken")
dotenv.config()

app.use(express.json())

const userRoute = require("./routes/user-route")
app.use("/user", userRoute)


const port = process.env.PORT || 8800;



// app.get("/url",(req,res)=>{

//     let name = req.query.name
//     console.log("hello world")
//     return res.send(name)
// })


app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running on port");
    }
})