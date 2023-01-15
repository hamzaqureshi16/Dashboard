import express from 'express';
import model from '../model/dashboard.js';


const router = express.Router();
 router.post('/dashboard', async (req, res) => {
    console.log('post reached');
    const newCompany = model({
        name: req.body.name.toString(),
        address: req.body.address.toString(),
        city: req.body.city.toString(),
        state: req.body.state.toString(),
        zip: req.body.zip.toString()
    });
    try {
        await newCompany.save();
        res.json(newCompany);
    } catch (error) {
        
    }
    })

   export default router;