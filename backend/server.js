const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.status(200).send("Welcome at Server");
})

app.listen(port, console.log("Server is Running..."))