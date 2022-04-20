const Task = require('../models/task.model');
const Boom = require('@hapi/boom');


const taskAPI = {
    all: {
        async handler(request, h){
            try{
                const tasks = await Task.find()   
                return tasks
            }catch(error){
                Boom.badImplementation(error);
            }
        }
    },
    register: {
        async handler(request, h){
            try{
                const newTask = new Task({
                    title: request.payload.title,
                    status: request.payload.status
                });
                newTask.save()
                return {
                    data: newTask,
                    status: 200,
                    message: "Task register successfully"
                }
            }catch(error){
                Boom.badImplementation(error);
            }
        }
    }
}

module.exports = taskAPI;