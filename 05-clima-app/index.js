require('colors');
console.clear();	
const {leerInput, inquirerMenu, pausa} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');
const main = async() => {
	const busquedas = new Busquedas();
	let opt = '';
	do{
		opt = await inquirerMenu();		
		switch(opt){
			case 1:
				//mostrar mensaje
				const lugar = await leerInput('Ciudad: ');
				await busquedas.ciudad(lugar);
				//buscar los lugares
				//selecciona el lugar
				//clima
				//mostrar resultados
				console.log('Informacion del lugar'.green);
				console.log('Ciudad:'.green);
				console.log('Lat'.green);
				console.log('Lng'.green);
				console.log('Temperatura'.green);
				console.log('Min'.green);
				console.log('Max'.green);
			break;
			case 2:
				console.log('menu 2');
			break;
			case 3:
				console.log('menu 3');
			break;
		}
		if(opt !== 0) await pausa();
	}while(opt !== 0);
}
main();