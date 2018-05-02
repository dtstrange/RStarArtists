//requirements
require("dotenv").config();
const express = require("express");
const path = require("path");
const jwt = require("express-jwt");
const fileUpload = require('express-fileupload');

//middleware
const bodyParser = require('body-parser');

//express setup
const app = express();
const PORT = process.env.PORT || 3001;
const isDev = process.env.NODE_ENV === 'development';

//fileupload middleware
app.use(fileUpload())


const db = require(path.join(__dirname + '/models'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));














db.sequelize.sync({ force: isDev }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    })
});