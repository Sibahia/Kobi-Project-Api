const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config({ path: 'backend/env/.env' });
const fs = require('fs');
const port = 5500;

const { dbUser }  = require('../src/db.js');
const { dirPublic } = require('../../frontend/directory.js');
// const { routes } = require('../libs/routes.js');

const dir = `http://127.0.0.1:${port}`

let corsOptions = {
    'origin': '*',
    'methods': ['GET', 'POST', 'PUT', 'DELETE']
}

app.use(express.static('frontend'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(require('../routes/home'));
app.use(require('../routes/login'));
app.use(require('../routes/register'));
app.use(require('../routes/verify'));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: 'frontend/public' });
});

 
app.listen(port, function() {
    console.log(`Listening port ${port}`);
});

console.log(process.env.KEY_SECRET)
console.log('ready');
console.log("Loc: ==> " + __dirname);