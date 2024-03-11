import express from "express";
import { Rant } from "../models/RantModel.js";

const router = express.Router();

//Save a new Rant
router.post('/', async (req, res)=>{
    try {
        if(
            !req.body.name
        ) {
            req.body.name = "Anonymous"
        } else if(!req.body.description) {
            return res.status(400).send({message: 'Please rant!'})
        }

        const newRant = {
            name: req.body.name,
            description: req.body.description
        };

        const rant = await Rant.create(newRant);

        return res.status(201).send(rant);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})

    }
})

//Get all rants
router.get('/', async (req, res)=>{
    try {
        const rants= await Rant.find({})
        return res.status(200).json({
            count: rants.length,
            data: rants
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).send({message: error.message})
    }
})

//Get one rant by id
router.get('/:id', async (req, res)=>{
    try {
        const {id} = req.params;


        const rant= await Rant.findById(id)
        return res.status(200).json(rant);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({message: error.message})
    }
})

//Update the rant
router.put('/:id', async (req, res)=>{
    try {
        if(
            !req.body.name
        ) {
            req.body.name = "Anonymous"
        } else if(!req.body.description) {
            return res.status(400).send({message: 'Please rant!'})
        }
        
        const {id} = req.params;

        const result = await Rant.findByIdAndUpdate(id, req.body);
        if(!result) {
           return res.status(400).json({message: 'Rant not found!'})
        }

        return res.status(200).json({message: 'Rant Updated!'});
    } catch (error) {
        console.log(error.message);
        res.status(400).send({message: error.message});
    }
})

//Delete a rant
router.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const result = await Rant.findByIdAndDelete(id);

        if(!result) {
            return res.status(404).json({message: 'Rant not found!'})
        }

        return res.status(201).json({message: 'Rant deleted succesfully!'})

    } catch (error) {
        console.log(error.message);
        res.status(400).send({message: error.message});
    }
})

export default router;