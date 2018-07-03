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
    const imgDirectory = './public/assets/images/' + req.body.catalogNumber.trim() + '/pic';
    const thumbDirectory = './public/assets/images/' + req.body.catalogNumber.trim() + '/thumb';
    const img1Link = './public/assets/images/' + req.body.catalogNumber.trim() + '/pic/1.jpg';
    const img2Link = './public/assets/images/' + req.body.catalogNumber.trim() + '/pic/2.jpg';
    const img3Link = './public/assets/images/' + req.body.catalogNumber.trim() + '/pic/3.jpg';
    const thumb1Link = './public/assets/images/' + req.body.catalogNumber.trim() + '/thumb/1.jpg';
    const thumb2Link = './public/assets/images/' + req.body.catalogNumber.trim() + '/thumb/2.jpg';
    const thumb3Link = './public/assets/images/' + req.body.catalogNumber.trim() + '/thumb/3.jpg';
    const product = {
        catalogNumber: req.body.catalogNumber.trim(),
        name: req.body.name.trim(),
        category: req.body.category,
        size: req.body.size,
        price: req.body.price,
        description: req.body.description,
        
    };

    // const images = {
    //     img1: req.files.image1.name,
    //     // img2: req.files.image2,
    //     // img3: req.files.iamge3,
    //     // thumb1: req.files.thumb1,
    //     // thumb2: req.files.thumb2,
    //     // thumb3: req.files.thumb3
    // }

    // fs.mkdir("./public/assets/images/" + product.catalogNumber, (err) => {
    //     if ((err) && (err.code !== 'EEXIST')) {
    //         console.error(err)
    //     }
    //     else {
    //         console.log(req.files)
    //         fs.mkdir(imgDirectory)

    //         images.img1.mv(img1Link)
    //             .then((resp) => {
    //                 console.log(resp);
    //                 res.status(200).json({ message: "Upload img1 successful!" });
    //             })
    //             .catch((err) => {
    //                 console.error(err);
    //                 res.status(500).json({ message: "Internal server error.", error: err });
    //             })
            // else if (req.files.img2) {
            //     req.files.img2.mv(img2Link)
            //         .then((resp) => {
            //             res.status(200).json({ message: "Upload img2 successful!" });
            //         })
            //         .catch((err) => {
            //             console.error(err);
            //             res.status(500).json({ message: "Internal server error.", error: err });
            //         })
            // }
            // else if (req.files.img3) {
            //     req.files.img3.mv(img3Link)
            //         .then((resp) => {
            //             res.status(200).json({ message: "Upload img3 successful!" });
            //         })
            //         .catch((err) => {
            //             console.error(err);
            //             res.status(500).json({ message: "Internal server error.", error: err });
            //         })
            // }
            // else if (req.files.thumb1) {
            //     fs.mkdir(thumbDirectory)
            //     req.files.thumb1.mv(thumb1Link)
            //         .then((resp) => {
            //             res.status(200).json({ message: "Upload thumb1 successful!" });
            //         })
            //         .catch((err) => {
            //             console.error(err);
            //             res.status(500).json({ message: "Internal server error.", error: err });
            //         })
            // }
            // else if (req.files.thumb2) {
            //     req.files.thumb2.mv(thumb2Link)
            //         .then((resp) => {
            //             res.status(200).json({ message: "Upload thumb2 successful!" });
            //         })
            //         .catch((err) => {
            //             console.error(err);
            //             res.status(500).json({ message: "Internal server error.", error: err });
            //         })
            // }
            // else if (req.files.thumb3) {
            //     req.files.thumb3.mv(thumb3Link)
            //         .then((resp) => {
            //             res.status(200).json({ message: "Upload thumb3 successful!" });
            //         })
            //         .catch((err) => {
            //             console.error(err);
            //             res.status(500).json({ message: "Internal server error.", error: err });
            //         })
            // }
    //     }
    // })
        // 
        
        db.Inventory.create(product)
                .then(
                    (resp) => {
                        res.status(200).json({ message: "item created" })
                    }
                )
                .catch(
                    (err) => {
                        console.error(err);
                        res.status(500).json({ message: "Internal server error", error: err });
                    }
                )


});

router.put("/update", (req, res) => {
    const product = {};
    if (req.body.catalogNumber) {
        product.catalogNumber = req.body.catalogNumber.trim()
    }
    if (req.body.name) {
        product.name = req.body.name.trim()
    }
    if (req.body.category) {
        product.category = req.body.category.trim()
    }
    if (req.body.size) {
        product.size = req.body.size.trim()
    }
    if (req.body.price) {
        product.price = req.body.price.trim()
    }
    if (req.body.description) {
        product.description = req.body.description.trim()
    }
    if (req.files.img1) {
        product.img1 = req.files.img1
    }
    if (req.files.img2) {
        product.img2 = req.files.img2
    }
    if (req.files.img3) {
        product.img3 = req.files.img3
    }
    if (req.files.thumb1) {
        product.thumb1 = req.files.thumb1
    }
    if (req.files.thumb2) {
        product.thumb2 = req.files.thumb2
    }
    if (req.files.thumb3) {
        product.thumb3 = req.files.thumb3
    }
    db.Inventory.findOne({ where: { id: res.data.id } })
        .then(resp => {
            res.json({ success: true })
        })
        .catch(function (err) {
            console.error(err);
            return res.status(500).end('Update FAILED' + err.toString());
            throw err;
        });
});

module.exports = router;