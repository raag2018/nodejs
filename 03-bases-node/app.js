const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('../config/app.js');
require('colors');
console.clear();
crearArchivo(argv.b, argv.l, argv.h)
	.then(multiplicar => console.log(multiplicar.rainbow, 'con exito'))
	.catch(err => console.log(err));