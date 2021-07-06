const express = require('express');
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
app.listen(8080);