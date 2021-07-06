const http = require('http');
//request(lo que solicita el cliente), 
//response( respuesta del servidor)
http.createServer((req, res) => {
	
	res.write('Hello World');
	res.end();
})
.listen(8080);
console.log('Escuchando ', 8080);