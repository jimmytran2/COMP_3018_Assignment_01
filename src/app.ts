import express, { Express } from "express";

import setupSwagger from  "../config/swagger";

// Initialize Express application
const app: Express = express();

setupSwagger(app);

// Define a route
app.get("/", (req, res) => {
	res.send("Hello World!");
});

/** 
 * @openapi
 * /tasks:
 *  get:
 *   summary:  Retrieve a list of tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A list of tasks
*/
app.get("/tasks", (req, res) => {
    res.send("Retrieve tasks");
});

/** 
 * @openapi
 * /api/v1/health:
 *  get:
 *   summary: Health checkpoint
 *   tags: [Health Check]
 *   responses:
 *    200:
 *     description: Health Check
*/
app.get("/api/v1/health", (req, res) => {
	res.json({
		status: "OK",
		uptime: process.uptime(),
		timestamp: new Date().toISOString(),
		version: "1.0.0",
	});
});


export default app;