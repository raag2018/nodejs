const express = require('express');
require("dotenv").config();
const port = process.env.PORT;
const app = express();
//para servir contenido estatico 
app.use(express.static('public'));
app.get('/', (req, res) => {
	res.send('Hello Express');
});
app.get('/elements', (req, res) => {
	//res.send('Hello mundo');
	res.sendFile(__dirname + '/public/elements.html');
});
app.get('/generic', (req, res) => {
	//res.send('Hello mundo');
	res.sendFile(__dirname + '/public/generic.html');
});
app.get('*',  (req, res ) => {
	//res.send('404 Page not found');
	res.sendFile(__dirname + '/public/404.html');
});
app.listen(port);
//app.listen(port, () => {
//	console.log(`Ejemplo de escuchar a localhost:${port}`);
//});