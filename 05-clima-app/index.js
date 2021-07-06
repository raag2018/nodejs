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
				if(id === '0') continue;

				const lugarSel = lugares.find(l => l.id === id);
				//guardar en db
				busquedas.agregarHistorial(lugarSel.nombre);
				//buscar los lugares
				//selecciona el lugar
				//clima
				const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
				//mostrar resultados
				console.clear();
				console.log(`Informacion del lugar:`.green);
				console.log('Ciudad:'.green, lugarSel.nombre);
				console.log('Lat'.green, lugarSel.lat);
				console.log('Lng'.green, lugarSel.lng);
				console.log('Temperatura'.green, clima.temp);
				console.log('Min'.green, clima.min);
				console.log('Max'.green, clima.max);
				console.log('Desc'.green, clima.desc);
			break;
			case 2:
				//busquedas.historial.forEach((lugar,i) => {
				busquedas.historialCapitalizado.forEach((lugar,i) => {
					const idx = `${i + 1}.`.green;
					console.log(`${idx} ${lugar}`);
				});
			break;
			case 3:
				console.log('menu 3');
			break;
		}
		if(opt !== 0) await pausa();
	}while(opt !== 0);
}
main();