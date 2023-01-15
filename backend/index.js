import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
import bodyParser from "body-parser"; 
import router from './routes/dashboard.js';

const url = '';
const app = express();

//connect to db using mongoose
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => console.log('connected'));
app.listen(3000);
app.use(cors);
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));   
app.use('/dashboard',router)