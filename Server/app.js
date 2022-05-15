// aqui van todos los app.use.....

const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();

const env = require('dotenv').config({path:'../.env'})


app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.static(path.join(__dirname,"..","client")));

app.use(express.json());
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","client","index.html"))
})
// app.use("/data",(req,res)=>{
//     res.sendFile(path.join(__dirname, "data", "pokemon-tcg-data","cards","en","base1.json"))
// })
module.exports = {app, env}