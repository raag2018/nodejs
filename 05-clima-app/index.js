require('colors');
console.clear();	
const {leerInput, inquirerMenu, pausa, listarLugar} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');
const main = async() => {
	const busquedas = new Busquedas();
	let opt = '';
	do{
		opt = await inquirerMenu();		
		switch(opt){
			case 1:
				//mostrar mensaje
				const termino = await leerInput('Ciudad: ');
				//buscar lugares
				const lugares = await busquedas.ciudad(termino);
				//seleccionar el lugar
				const id = await listarLugar(lugares);
				const lugarSel = lugares.find(l => l.id === id);
				//buscar los lugares
				//selecciona el lugar
				//clima
				//mostrar resultados
				console.log(`Informacion del lugar:`.green);
				console.log('Ciudad:'.green, lugarSel.nombre);
				console.log('Lat'.green, lugarSel.lat);
				console.log('Lng'.green, lugarSel.lng);
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