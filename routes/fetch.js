const db = require("../models");
const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get("/", (req, res)=>{
    db.Inventory.findAll({})
    .then((resp)=>{
        res.status(200).json(resp)
    })
    .catch(
        (err)=>{
            console.error(err);
            res.status(500).json({message:"Internal server error", error: err});
        }
    )
});

router.get("/:catalogNumber", (req, res)=>{
    db.Inventory.findOne({where:{
        catalogNumber: req.param.catalogNumber
    }})
    .then((resp)=>{
        res.status(200).json(resp)
    })
    .catch(
        (err)=>{
            console.error(err);
            res.status(500).json({message:"Internal server error", error: err});
        }
    )
});

router.get("/:category", (req, res)=>{
    db.Inventory.findAll({where:{
        category: req.param.category
    }})
});


module.exports = router;