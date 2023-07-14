const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = function app() {

    app.use(express.static('frontend'));
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(cookieParser());

}