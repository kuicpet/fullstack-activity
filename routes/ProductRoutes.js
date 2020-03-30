const express = require('express');
const productModel = require('../models/product');

const app = express();

//Get all products--success
app.get('/api/products',async(req,res,next)=> {
    const products = await productModel.find({});
    try {
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    };
    next();
});

//Post a product into database--sucess
app.post('/api/products',async(req,res,next) => {
        const product = new productModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            inStock: req.body.inStock
        });
       try {
           await product.save();
           res.send(product);
       } catch (error) {
           res.status(500).send(error);
       }
        next();;
       
    });

//Get a product by id--success
app.get('/api/products/:id',async(req,res,next) => {
    const product = await productModel.findById({
        _id:req.params.id
    });
    try {
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    };
    next();
});
//Update a product by id--success
app.put('/api/products/:id',async(req,res,next) => {
    try {
        await productModel.findByIdAndUpdate(req.params.id,req.body);
        await productModel.save();
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    };
    next();
});
app.delete('/api/products/:id',async(req,res,next) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        if(!product) res.status(404).send("No item Found");
        res.status(200).send();
        console.log("Item successfully deleted!")
    } catch(error){
        res.status(500).send(error);
    }
    next();
});







module.exports = app;