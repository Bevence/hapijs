const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/hapi-task';

mongoose.connect(db)
    .then(() => {
        console.log("Mongoose database connected successfully");
    })
    .catch((err) => {
        console.log("Fail in database connection");
    })