const express = require ("express")

const app = express()
const port=process.env.PORT || 2255
app.use(express.json())
const connect = require("./config/db")

// const {register,login} = require ("./controllers/auth.controller")

// app.post("/register",register)
// app.post ("/login",login)


 const itemMasterController = require ("./controllers/itemMaster.controller")


app.use("/items",itemMasterController)


app.listen(port,async function (req,res){
    try{
        connect();
        console.log ("Listening Port 2255 ")
    }catch(err){
        console.log(err.message)
    }
})