const {crearArchivo} = require('./helpers/multiplicar');
console.clear();
const n = 3;
crearArchivo(n)
	.then(multiplicar => console.log(multiplicar, 'creado'))
	.catch(err => console.log(err));