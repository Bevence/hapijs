

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
]

module.exports = routes;