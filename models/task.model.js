const mongoose = require('mongoose');

const taskModel = new mongoose.Schema({
    title: {
        type: String,
        required: '{PATH} is required'
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskModel);
module.exports = Task;