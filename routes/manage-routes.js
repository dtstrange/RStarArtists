const db = require("../models");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const authCtrl = require("../controller/auth/auth-ctrl.js");
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.post("/create", (req, res) => {
    const product = {
        catalogNumber: req.body.catalogNumber.trim(),
        name: req.body.name.trim(),
        category: req.body.category,
        size: req.body.size,
        price: req.body.price,
        description: req.body.description
    };

    db.Inventory.create(product)
    .then(
        (resp) => {
            res.status(200).json({message:"item created"})
        }
    )
    .catch(
        (err) => {
            console.error(err);
            res.status(500).json({message:"Internal server error", error: err});
        }
    );
});

router.put("/update",(req,res)=>{
    const product = {};
    if(req.body.catalogNumber){
        product.catalogNumber = req.body.catalogNumber.trim()
    }
    if(req.body.name){
        product.name = req.body.name.trim()
    }
    if(req.body.category){
        product.category = req.body.category.trim()
    }
    if(req.body.size){
        product.size = req.body.size.trim()
    }
    if(req.body.price){
        product.price = req.body.price.trim()
    }
    if(req.body.description){
        product.description = req.body.description.trim()
    }
    db.Inventory.findOne({where:{ id: res.data.id}})
    .then(resp =>{
        res.json({success:true})
    })
    .catch(function(err) {
        console.error(err);
        return res.status(500).end('Update FAILED' + err.toString());
        throw err;
    });
});

module.exports = router;