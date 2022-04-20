const mongoose = require('mongoose');

const taskModel = new mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required'
    },
    description: {
        type: String
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskModel);
module.exports = Task;