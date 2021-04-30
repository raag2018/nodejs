const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')
		.option('b',{
			alias: 'base',
			type: 'number',
			demandOption: true
		})
		.option('l',{
			alias: 'list',
			type: 'boolean',
			default: false
		})
		.check((argv, options) => {
			if(isNaN(argv.b)){
				throw 'La base tiene que ser un numero';
			}
			return true
			//console.log('yargs',argv);
		})
		.argv;
console.clear();
//const [,,arg3 = 5] = process.argv;
//const [,base = 5] = arg3.split("=");
//console.log(base);
//const n = 3;
//console.log(argv);
//console.log(argv.base);
crearArchivo(argv.b, argv.l)
	.then(multiplicar => console.log(multiplicar, 'con exito'))
	.catch(err => console.log(err));