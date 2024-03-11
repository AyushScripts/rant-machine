import express from 'express'
import { PORT, MONGODB_URL } from './config.js';
import mongoose from 'mongoose';
import { Rant } from './models/RantModel.js';
import rantsRoute from './routes/rantsRoute.js';
import cors from 'cors';


const app = express();

app.use(express.json()) //Postman will not work if we don't use this

app.use(cors());

app.get('/', (req, res)=>{
    res.status(201).send("Welcome to RantMachine!")
})

app.use('/rants', rantsRoute)

mongoose.connect(MONGODB_URL).then(()=>{
    console.log('App connected to Database! ✔');
    app.listen(PORT, ()=>{
        console.log("App is running on port 3000! ⭐")
    })
}).catch((error)=>{
    console.log(error);
}); 
