// aqui van todos los app.use.....

import express from 'express';
import cors from 'cors'
import path from 'path';

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
export {app, env}