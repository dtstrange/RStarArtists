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

// router.put("/update",(req,res)=>{
//     const product = {
//         catalogNumber: req.query.catalogNumber.trim(),
//         name: req.query.name.trim(),
//         size: req.query.size,
//         price: req.query.price,
//         description: req.query.description
//     };

//     db.Inventory.findOne
// });

module.exports = router;