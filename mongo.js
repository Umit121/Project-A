const mongoose = require('mongoose');
const config = require('../server.config');

module.exports = () => {

    mongoose.connect(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('open', () => {
        console.log('Connected to MongoDB successfully');
    });
    db.on('error', (error)=>{
        console.log('Connection to MongoDB failed:');
        console.log(error);
    });

}
