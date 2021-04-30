const {crearArchivo} = require('./helpers/multiplicar');
console.clear();
const [,,arg3 = 5] = process.argv;
const [,base = 5] = arg3.split("=");
console.log(base);
const n = 3;
crearArchivo(base)
	.then(multiplicar => console.log(multiplicar, 'creado'))
	.catch(err => console.log(err));