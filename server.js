const express = require('express');
const { todos } = require('./todos.json');
const fs = require('fs');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
	const server = express();
	server.get('delete', (req, res) => {
        todos.todos.splice(req.number,1);
        let toDos=toString(todos.todos);
        fs.writeFile("todos.json","{'todos':"+toDos+"}")
	});
	server.get('*', (req, res) => {
		return handle(req, res);
	});
	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
