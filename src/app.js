const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet =  require('helmet');

const app = express();

// Helmet helps secure your Express app by setting various HTTP headers
// to protect against common web vulnerabilities like XSS, clickjacking, and others.
app.use(helmet());

// Cors (Cross-Origin Resource Sharing) middleware enables your server to accept 
// requests from different domains, which is necessary for APIs that frontend apps
// from other origins need to access.
app.use(cors());

// logging middleware that logs details about each HTTP request 
// (method, URL, status, etc.) to the console
app.use(morgan('combined'));

// This middleware parses incoming JSON payloads in request bodies, 
// so you can access parsed data as req.body in your route handlers.
app.use(express.json());


// Basic route
app.get('/', (req, res) => {
    res.json({message: 'Backend deepdive'});
})

module.exports = app;