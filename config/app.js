const argv = require('../03-bases-node/node_modules/yargs')
		.option('b',{
			alias: 'base',
			type: 'number',
			demandOption: true,
			describe: 'Es la base de la tabla de multiplicar'
		})
		.option('l',{
			alias: 'list',
			type: 'boolean',
			default: false,
			describe: 'Muestra la tabla'
		})
		.option('h',{
			alias: 'hasta',
			type: 'number',
			default: 10,
			describe: 'Limite del numero maximo de la tabla'
		})
		.check((argv, options) => {
			if(isNaN(argv.b)){
				throw 'La base tiene que ser un numero';
			}
			if(isNaN(argv.h)){
				throw 'El limite tiene que ser un numero';
			}
			return true
			//console.log('yargs',argv);
		})
		.argv;
	//const [,,arg3 = 5] = process.argv;
	//const [,base = 5] = arg3.split("=");
	//console.log(base);
	//const n = 3;
	//console.log(argv);
	//console.log(argv.base);
module.exports = argv;