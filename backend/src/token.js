const jwt = require('jsonwebtoken');
const token = jwt.sign(privateKey, { algorithm: 'RS256'})