'use strict';
 
const Hapi = require('@hapi/hapi');
const routes = require('./routes/task.routes');
require('./utils/db.init');	

const server = Hapi.server({
	port: 4000,
	host: 'localhost',
	routes: {
		cors: true
	}
});

const startServer = async () => {
	try{
		routes.forEach((route) => {
			// console.log(route);
			server.route(route)
		})
		await server.start();
		console.log(`Server running at ${server.info.uri}`);
	}catch(err){
		console.log("Error in starting server");
	}
};

startServer();



