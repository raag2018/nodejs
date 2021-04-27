const {getMultiplicacion} = require('./helpers/multiplicar');
console.clear();
const n = 6;
getMultiplicacion(n)
	.then(multiplicar => console.log(multiplicar, 'creado'))
	.catch(err => console.log(err));