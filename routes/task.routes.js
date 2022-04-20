const taskAPI = require('../controllers/task.controller');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return {success : true}
        }
    },
    {
        method: 'GET',
        path: '/home',
        handler: (request, h) => {
            return {success : true}
        }
    },
    {
        method: "POST",
        path: '/task/register',
        options: taskAPI.register
    },
    {
        method: 'GET',
        path: '/task',
        options: taskAPI.all
    }
]

module.exports = routes;