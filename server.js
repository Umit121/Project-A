const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./server.config');
const mongo = require('./db/mongo');
const apiRouter = require('./api/api');
const app = express();

// start mongoDB
mongo();

// setup express middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use('/api',apiRouter);

// setup index route
app.get('*', (req,res)=> res.sendFile(path.join(__dirname, 'public/Kalendersite.html')));

// start server
app.listen(config.PORT, console.log(`Server listen on PORT ${config.PORT}`));
