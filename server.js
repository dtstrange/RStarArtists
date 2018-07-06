//requirements
require("dotenv").config();
const express = require("express");
const path = require("path");
const jwt = require("express-jwt");
const fileUpload = require('express-fileupload');
const authRoutes = require("./routes/auth-routes.js");
const fetch = require("./routes/fetch.js")
const manageRoutes = require("./routes/manage-routes.js");


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

//routes
app.use(express.static(path.join(__dirname + '/public')));
app.use("/api/manage", authRoutes);
app.use("/api/fetch", fetch);
app.use(["/api/inventory"],jwt({
    secret: process.env.JWT_SECRET
}));
app.use("/api/inventory", manageRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname + '/client/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    })
});